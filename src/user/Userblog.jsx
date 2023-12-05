import React,{useState} from 'react'
import Blogg from './Blog'
import Addblog from './Addblog';
import { CiBoxList } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import './style.css';
// import '../userprofile.css';
export default function Userblog() {
    let [blog,setBlog]= useState(true);
    let [add,setAdd] = useState(false);
    let Blog = ()=>{
        setBlog(true);
        setAdd(false);
    }
    let Newpost =()=>{
        setAdd(true);
        setBlog(false) 
    }
  return (
   <>
   <div className='row mt-2'>
    <div className='col-md-3 col-lg-3'>
    <ul className="list-group p-2">
        <li onClick={Blog} className={`list-group-item ${blog?'active':''}`}><CiBoxList className='iconLarge'/><span className='ms-2'> My Blog</span></li>
        <li onClick={Newpost} className={`list-group-item ${add?'active':''}`}><CiCirclePlus className='iconLarge'/> <span className='ms-2'> Add Post</span></li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
</ul>
    </div>
    <div className='col-md-9 col-lg-9'>
            {blog&&(<Blogg/>)}
            {add&&(<Addblog/>)}
    </div>
   </div>
   </>
  )
}
