import React from 'react';
import Mybutton from '../utils/button';
import Login from './Login'


const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h1>New Customer</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas provident similique eos tempore ab quidem voluptatum doloribus animi cupiditate illum, ea cumque, necessitatibus autem voluptas atque corporis nulla officia minima!</p>
                        <Mybutton 
                           type="default"
                           title="Create an account"
                           linkTo="/register"
                           addStyles= {{
                               margin: '10px 0 0 0'
                           }}
                        />
                    </div>
                    <div className="right">
                        <h2>Register customers</h2>
                        <p>If you have an account please log in.</p>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin
