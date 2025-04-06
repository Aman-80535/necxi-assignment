import { auth, provider, signInWithPopup } from "../firebase/firebaseConfig";


export async function createUser(data) {
  try{
    const result = await signInWithPopup(auth, provider)
    return result
  }
  catch(err){
    console.log(err.message)
    return err.message
  }
}
