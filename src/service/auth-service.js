import firebase from "firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
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
