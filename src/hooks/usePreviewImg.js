import { useState } from "react"
import useShowToast from "./useShowToast"

const usePreviewImg = () => {
   const [selectedFile, setSelectedFile] = useState(null)
   const showToast = useShowToast()
   const maxFileSizeInBytes = 2 * 1024 * 1024 // 2mb

   const handleImageChange = (e) => {
      const file = e.targe.files[0]
      if(file && file.type.startswith('image/')) {
         if(file.size > maxFileSizeInBytes) {
            showToast("Error", "File size must be less than 2MB", "error")
            setSelectedFile(null)
            return
         }
         const reader = new FileReader()
         reader.onloadend = () => {
            setSelectedFile(reader.result)
         }
         reader.readAsDataURL(file)
      } else {
         showToast("Error", "Please upload an image file", "error")
         setSelectedFile(null)
      }
   }

   return { selectedFile, handleImageChange, setSelectedFile}
}

export default usePreviewImg