import React from 'react'

export default function Blogdetails({back,id}) {
    console.log(id)
  return (
   <>
    <div className='container'>
        <p className='text-center'>Blog Details will be show here.</p>
        <button onClick={back} className='btn btn-primary'>Go back</button>
           <p>Record id: {id}</p>
    </div>
   </>
  )
}
