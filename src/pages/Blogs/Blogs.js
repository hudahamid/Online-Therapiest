import React, {useEffect,useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Blogs() {
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
        welcome to Blogs  page
        <img
          src="https://firebasestorage.googleapis.com/v0/b/calm-minds-project.appspot.com/o/blogImages%2FRectangle45.svg?alt=media&token=9eaa7a99-680b-4734-868c-cdf5899133e9"
          alt=""
          className="object-cover h-full w-full object-center rounded-lg mb-20"
        />

        {blogs.map((blog)=>{
          return(
            <div>
              <h1>{blog.title}</h1>
              <p>{blog.text}</p>

            </div>
          )
        })}
    </div>
  );
}

export default Blogs;