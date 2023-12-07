import { useState } from "react"
import AuthUser from './AuthUser';
import '../app-assets/css/pages/authentication.css';
export default function Login() {
    const {http,setToken} = AuthUser();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const submitForm = () =>{
        // api call
        http.post('/public/auth/login',{email:email,password:password}).then((res)=>{
            setToken(res.data.data.user,res.data.data.token);
        })
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

                                <h4 class="card-title mb-1">Welcome to Bloggers 👋</h4>
                                <p class="card-text mb-2">Please sign-in to your account and start the adventure</p>

                               
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
                                    <span>New on our platform?</span>
                                    <a href="auth-register-basic.html">
                                        <span>Create an account</span>
                                    </a>
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