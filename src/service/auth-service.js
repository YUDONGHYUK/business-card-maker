import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;

/* 
      const object = {
        name: 'doyu',
        age: 30        
      }

      객체 뒤에 대괄호[]를 사용하고 키를 입력하여 요소에 접근 가능.
      
      object['name']  === object.name   => 'doyu'
      object['age']   === object.age    =>  30
    */
