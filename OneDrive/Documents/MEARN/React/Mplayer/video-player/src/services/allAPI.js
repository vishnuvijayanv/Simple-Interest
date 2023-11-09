import  {commonAPI}  from "./commonAPI"
import { serverURL } from "./serverURL"


// upload video

export const uploadVideo = async(reqBody)=>{
      //return the response to Add.jsx component
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all uploaded videos

export const getAllVideos = async()=>{
   //return the value to View.jsx component
   return await commonAPI('GET',`${serverURL}/videos`,'')
}

//to delete a video
export const deleteAVideo = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}


//api to add history
export const addToHistory= async(VideoDetails)=>{
return await commonAPI('POST',`${serverURL}/history`,VideoDetails)
}


//API to fet history from json-server


export const getAllHistory  = async()=>{
   return await commonAPI('GET',`${serverURL}/history`,'')
}

//API to delelte history

export const deleteAHistory = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add category
export const addAllCategory= async(body)=>{
   return await commonAPI('POST',`${serverURL}/categories`,body)
   }


//API to get all Category

export const getAllCategories  = async()=>{
   return await commonAPI('GET',`${serverURL}/categories`,'')
}

//API to delete categories

export const deleteACategories = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}


//API to get a particular video from videos

export const getAVideo  = async(id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,'')
}



//API to add category with new videos

export const updateCategory = async(id,body)=>{
  return await commonAPI('PUT',`${serverURL}/categories/${id}`,body)
}












