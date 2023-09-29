import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export const handleSubmit = async (e) => {

   
   

   e.preventDefault()
   try {
     await addDoc(collection(db, 'Usuários'), {
       "Email": String(document.getElementById("email").value),
       
       "Senha": String(document.getElementById("pw").value),
       
     })
     
   } catch (err) {
     alert(err)
   }
 }

