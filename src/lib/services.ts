import { addDoc, collection, Timestamp } from "firebase/firestore"
import { db } from "./firebase"
import Cookies from "js-cookie"

export async function formHandler(data : {
    fullname: string,
    gender: string,
    age: string,
    semester: string,
}) {
  const fixedData = {timestamp : Timestamp.now(), ...data}
  try {
    await addDoc(collection(db, "formulir"), fixedData)
    Cookies.set('status', '200')
    return ({status: 200 , message: 'done', data})
  }catch (err: any) {
    Cookies.set('status', '400')
    Cookies.set('message', 'dalam masalah, mohon coba beberapa kali')
    console.log(err);
    return ({status: 400 , message: 'dalam masalah, mohon coba beberapa kali', data})
  }
}