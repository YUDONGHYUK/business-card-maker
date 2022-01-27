import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
