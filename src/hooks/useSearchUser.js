import { useState } from "react"
import useShowToast from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"

const useSearchUser = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [user, setUser] = useState(null)
   const showToast = useShowToast()

   const getUserProfile = async (username) => {
      setIsLoading(true)
      try {
         const q = query(collection(firestore, 'users'), where("username", "==", username))
      
         const querySnap = await getDocs(q)

         if(querySnap.empty) return showToast("Error", "User not found", "error")

         querySnap.forEach((doc) => {
            setUser(doc.data())
         })

      } catch (error) {
         showToast("Error", error.message, "error")
         setUser(null)
      }
      finally {
         setIsLoading(false)
      }
   }

   return {isLoading, getUserProfile, user, setUser}
}

export default useSearchUser