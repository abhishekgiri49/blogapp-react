import { useState } from "react"

import { Link } from 'react-router-dom';
import AuthUser from './AuthUser';
import '../app-assets/css/pages/authentication.css';
export default function Register() {
    const {http,setToken} = AuthUser();
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [username,setUsername] = useState();
    
  
      // Add blog
    const user = { name, username,email,password };
    
    const submitForm = () =>{
        // api call
        if (!name || !username || !email || !password) {
            setErrorMessage('Please fill out all fields');
          }
        http.post('/public/auth/register',user).then((res)=>{
            setSuccessMessage('Registration Successful');
        }).catch((error) => {
            setErrorMessage('Error adding blog. Please try again.');
            
          });
    }

    return(
        <>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-basic px-2">
                    <div class="auth-inner my-2">
                        
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="index.html" class="brand-logo">
                                    
                                    <h2 class="brand-text text-primary ms-1">Bloggers</h2>
                                </a>

                                <h4 class="card-title mb-1">Register to Bloggers 👋</h4>
                                {errorMessage && (
                      <div className="alert alert-danger" role="alert">
                        {errorMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="alert alert-success" role="alert">
                        {successMessage}
                      </div>
                    )}
                                <div class="mb-1">
                                        <label for="login-email" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="login-email"onChange={e=>setName(e.target.value)} placeholder="john@example.com" aria-describedby="login-name" tabindex="1" autofocus />
                                    </div>
                                    <div class="mb-1">
                                        <label for="login-email" class="form-label">Username</label>
                                        <input type="text" class="form-control" id="login-email"onChange={e=>setUsername(e.target.value)} placeholder="adaaa" aria-describedby="login-username" tabindex="1" autofocus />
                                    </div>
                                    <div class="mb-1">
                                        <label for="login-email" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="login-email"onChange={e=>setEmail(e.target.value)} placeholder="john@example.com" aria-describedby="login-email" tabindex="1" autofocus />
                                    </div>

                                    <div class="mb-1">
                                        <div class="d-flex justify-content-between">
                                            <label class="form-label" for="login-password">Password</label>
                                            
                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input type="password" class="form-control form-control-merge" id="login-password" onChange={e => setPassword(e.target.value)} tabindex="2" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="login-password" />
                                            <span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span>
                                        </div>
                                    </div>
                                    
                                    <button class="btn btn-primary w-100" onClick={submitForm} tabindex="4">Sign in</button>
                                

                                <p class="text-center mt-2">
                                    <span>Already registerd?</span>
                                    <Link to={'/login'}>
                                        <span>Login</span>
                                    </Link>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}