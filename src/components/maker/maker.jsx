import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "doyu",
      company: "42Seoul",
      theme: "dark",
      title: "Software engineer",
      email: "ydh0905@nate.com",
      message: "fo for it",
      fileName: "doyu",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "doyu",
      company: "42Seoul",
      theme: "light",
      title: "Software engineer",
      email: "ydh0905@nate.com",
      message: "fo for it",
      fileName: "doyu",
      fileURL: "doyu.png",
    },
    3: {
      id: "3",
      name: "doyu",
      company: "42Seoul",
      theme: "colorful",
      title: "Software engineer",
      email: "ydh0905@nate.com",
      message: "fo for it",
      fileName: "doyu",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
