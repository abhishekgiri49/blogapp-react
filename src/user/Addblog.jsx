import React, { useRef } from 'react'
import axios from "axios";
export default function Addblog() {
    const posts = useRef(null);
    let Addpost  = (e)=>{
        e.preventDefault();
        const post = posts.current
        let title,content,catg,image;
        title = post['post'].value;
        content = post['content'].value;
        catg=post['catg'].value;
        image= post['image'].files[0];
        console.log(title,content,catg,image)
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
       axios.post("http://localhost:3001/create",formData,
       {withCredentials:true}).then((response)=>{
        console.log(response)
        if(response.data)posts.current.reset();
       })
    }
  return (
    <>
    <div className='container'>
    <div class="card mt-2 shadow-md p-2">
    <div class="card-body">
    <form ref={posts} onSubmit={Addpost}>
  <div class="mb-3">
    <label for="post" class="form-label fs-4">Post Title</label>
    <input type="text" name='post' class="form-control" id="post"/>
  </div>
  <div class="mb-3">
    <label for="content" class="form-label fs-4">Content</label>
    <textarea type="text" name='content' class="form-control" id="content"/>
  </div>
  <div class="mb-3">
  <select name='catg' class="form-select form-select-lg" aria-label="Default select example">
    <option selected>Select Category</option>
    <option value="1">Information Technology</option>
    <option value="2">Health</option>
    <option value="3">Economy</option>
</select>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Content Image</label>
  <input class="form-control" name='image' required type="file" id="formFile"/>
</div>
  <button type="subnit" class="btn  btn-outline-primary btn-lg shadow-md">Submit</button>
</form>
    </div>
</div>
    </div>
    </>
  )
}
