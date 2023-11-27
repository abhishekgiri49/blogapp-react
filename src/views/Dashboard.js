import { useEffect, useState } from 'react';
import AuthUser from './AuthUser';

export default function Dashboard() {
    const {http,token} = AuthUser();
    const {user,getUser} = AuthUser();
    const [userdetail,setUserdetail] = useState('');
    
    useEffect(()=>{
        fetchUserDetail();
    },[]);

     const fetchUserDetail = () =>{
        setUserdetail(user);
        //   UserService.getLoggedinUser().then(data => {
        //     setUserdetail(data);
        //   });
    }

    function renderElement(){
        if(userdetail){
            return <div>
                <h4>Name</h4>
                <p>{userdetail.name}</p>
                <h4>Email</h4>
                <p>{userdetail.email}</p>
            </div>
        }else{
            return <p>Loading.....</p>
        }

    }

    return(
        <div>
            <h1 className='mb-4 mt-4'>Dashboard page</h1>
            { renderElement() }
        </div>
    )
}