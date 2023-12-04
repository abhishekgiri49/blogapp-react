import React,{useState} from 'react'
import Blogg from './Blog'
import Addblog from './Addblog';
// import '../userprofile.css';
export default function Userblog() {
    let [blog,setBlog]= useState(true);
    let [add,setAdd] = useState(false);
    let Blog = ()=>{
        setBlog(true);
        setAdd(!add);
    }
    let Newpost =()=>{
        setAdd(true);
        setBlog(!blog)
    }
  return (
   <>
   <div className='row mt-2'>
    <div className='col-md-3 col-lg-3'>
        <div className='border shadow-md p-2'>
            <button onClick={Blog} className='btn btn-outline-primary mb-2 p-2 w-100'>My Blog</button>
            <button onClick={Newpost} className='btn btn-outline-primary mb-2 p-2 w-100'>New Post</button>
        </div>
    </div>
    <div className='col-md-9 col-lg-9'>
            {blog&&(<Blogg/>)}
            {add&&(<Addblog/>)}
    </div>
   </div>
   </>
  )
}
