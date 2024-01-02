import { useEffect, useState } from "react"
import useShowToast from "./useShowToast"
import usePostStore from "../store/postStore"
import useAuthStore from "../store/authStore"
import useUserProfileStore from "../store/userProfileStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"

const useGetFeedPosts = () => {
   const [isLoading, setIsLoading] = useState(true)
   const showToast = useShowToast()
   const {posts, setPosts} = usePostStore()
   const authUser = useAuthStore()
   const {setUserProfile} = useUserProfileStore()

   useEffect(() => {
      const getFeedPosts = async () => {
         setIsLoading(true)
         if(authUser.following.length === 0) {
            setIsLoading(false)
            setPosts([])
            return
         }
         const q = query(collection(firestore, 'posts'), where("createdBy", "in", authUser.following))
         try {
            const querySnap = await getDocs(q)
            const feedPosts = []
            querySnap.forEach(doc => {
               feedPosts.push({id: doc.id, ...doc.data()})
            })

            feedPosts.sort((a,b) => b.createdAt - a.createdAt)
            setPosts(feedPosts)

         } catch (error) {
            showToast("Error", error.message, "error")
         }
         finally {
            setIsLoading(false)
         }
      }
      if(authUser) getFeedPosts()
   }, [authUser, showToast, setPosts, setUserProfile])

   return {isLoading, posts}
}

export default useGetFeedPosts