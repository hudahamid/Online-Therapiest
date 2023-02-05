
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../../firebase-config';

function RecentBlogs() {
    const [blogs, setBlog] = useState([]);


    const collectionReference=collection(db,"Blog");
    useEffect(() => {
     const fetchBlogs=async () =>{
        const data= await getDocs(collectionReference);
        setBlog(data.docs.map((doc)=>({ ...doc.data(), id: doc.id })))
     }
     fetchBlogs();
  
    },[])
  return (
    <div >
   <h1>Recent Blogs</h1>
   <div className='flex-col flex md:flex-row gap-2 sm:gap-4 place-items-center '>
   {blogs.map((blog)=>{

return(
  <div className=''
  key={blog.id}
  >
     <div > 
    <img
   src={blog.linkImg}
   alt=""
   className=" im1 object-cover h-56 w-96 rounded-lg mr-3 mb-4 hover:scale-110 transition duration-300 ease-in-out"
 /></div>
  </div>
);
})}

   </div>
   
    </div>
  );
}

export default RecentBlogs;