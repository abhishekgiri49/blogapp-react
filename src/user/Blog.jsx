import React,{useState} from 'react';
import Blogdetails from './Blogdetails';
export default function Blog() {
    let [details,setDetails] = useState(true);
    let [blogDetails,setDetail] = useState();
    let Details = (id)=>{
        setDetail(id.id)
        setDetails(!details)
    }
    let Back = ()=>{
        console.log(details)
        setDetails(!details)
    }
  return (
    <div className='container'>
           {details?(
            <>
             <div onClick={()=>Details({id:1})} className='card mb-2 p-2 cursor-pointer border-radius'>
                <div className='d-flex'>
                <img alt='image' className='w-25 h-auto shadow' src='../app-assets/images/banner/banner-10.jpg'/>
                <div className='ms-4'>
                <h4>Content: <span className='text-secondary'>Marketing</span></h4>
                <p className='text-secondary'>22 Aug, 2023</p>
                </div>
                </div>
            </div>
            <div onClick={()=>Details({id:2})} className='card mb-2 p-2 cursor-pointer border-radius'>
                <div className='d-flex'>
                <img alt='image' className='w-25 h-auto shadow' src='../app-assets/images/banner/banner-10.jpg'/>
                <div className='ms-4'>
                <h4>Content: <span className='text-secondary'>Marketing</span></h4>
                <p className='text-secondary'>22 Aug, 2023</p>
                </div>
                </div>
            </div>
            <div onClick={()=>Details({id:3})} className='card mb-2 p-2 cursor-pointer border-radius'>
                <div className='d-flex'>
                <img alt='image' className='w-25 h-auto shadow' src='../app-assets/images/banner/banner-10.jpg'/>
                <div className='ms-4'>
                <h4>Content: <span className='text-secondary'>Marketing</span></h4>
                <p className='text-secondary'>22 Aug, 2023</p>
                </div>
                </div>
            </div>
            <div onClick={()=>Details({id:4})} className='card mb-2 p-2 cursor-pointer border-radius'>
                <div className='d-flex'>
                <img alt='image' className='w-25 h-auto shadow' src='../app-assets/images/banner/banner-10.jpg'/>
                <div className='ms-4'>
                <h4>Content: <span className='text-secondary'>Marketing</span></h4>
                <p className='text-secondary'>22 Aug, 2023</p>
                </div>
                </div>
            </div>
            </>
           ):(<>
           <Blogdetails back={Back} id={blogDetails}/>
           </>)}
        </div>
  )
}
