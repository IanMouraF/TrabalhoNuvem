import {firestore} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore/lite'

export const handleSubmit = async (e) => {

   
   

   e.preventDefault()
   try {
     await addDoc(collection(firestore, "Usuários"), {
       "Email": String(document.getElementById("email").value),
       
       "Senha": String(document.getElementById("pw").value),
       
     })
     
   } catch (err) {
     alert(err)
   }
 }

