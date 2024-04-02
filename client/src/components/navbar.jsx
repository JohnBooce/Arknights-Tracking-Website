import React, {useState, useEffect} from "react";
import './navbar.css'
import { useUserAuth } from "./LoginRegister/Authentication";
import {  useNavigate } from "react-router-dom";



const navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate()
    const handleLogout = async() => {
        try{
            await logOut()
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
   
    return (
        /*<nav>
            <a href="/">Home</a>
            <a href="">OpearatorList</a>
        </nav>*/
        <div className="test01 z-50">
        <button className="Bazinga" onClick={() => setNavOpen(!navOpen)}>
            <span className="material-symbols-outlined">menu</span>
        </button>
        <nav className={`nav ${navOpen ? "nav-open" : "nav-closed"}`}>
            <div className="container">
                {
                    user ? 
                    <ul className="nav-wrapper border-b">
                    <div className="Home hover:bg-amber-600 transition duration-300 ">
                        <a href="/" className=" transition ease-in-out duration-300">
                            <span className="material-symbols-outlined">home</span>
                            <li className="">Home</li>
                        </a>
                    </div>
                    <div className="Home hover:bg-amber-600 transition duration-300">
                        <a href="/guide">
                            <span className="material-symbols-outlined">developer_guide</span>
                            <li className="">Guide</li>
                        </a>
                    </div>
                    
                    <div className="Home hover:bg-amber-600 transition duration-300">
                        <a href="/import">
                            <span className="material-symbols-outlined">publish</span>
                            <li className="">Import</li>
                        </a>
                    </div>
                    <div className="Home hover:bg-amber-600 transition duration-300">
                            <a href="/operatorList" className=" transition ease-in-out duration-150">
                            <span className="material-symbols-outlined">group</span>
                            <li className="">Operator</li>
                            </a>
                    </div>
                    
                    <div className="Home hover:bg-amber-600 transition duration-300">
                            <a href="/lookup" className=" transition ease-in-out duration-150">
                            <span className="material-symbols-outlined">person_search</span>
                            <li className="">LookUp</li>
                            </a>
                    </div>
                    <div className="Home hover:bg-amber-600 transition duration-300">
                            <a href="/profile" className=" transition ease-in-out duration-150">
                            <span className="material-symbols-outlined">account_circle</span>
                            <li className="">Profile</li>
                            </a>
                    </div>
                    </ul> 
                    :
                    <ul className="nav-wrapper border-b">
                    <div className="Home hover:bg-amber-600 transition duration-300 ">
                        <a href="/" className=" transition ease-in-out duration-300">
                            <span className="material-symbols-outlined">home</span>
                            <li className="">Home</li>
                        </a>
                    </div>
                    <div className="Home hover:bg-amber-600 transition duration-300">
                        <a href="/guide">
                            <span className="material-symbols-outlined">developer_guide</span>
                            <li className="">Guide</li>
                        </a>
                    </div>
                    <div className="Home hover:bg-amber-600 transition duration-300">
                            <a href="/operatorList" className=" transition ease-in-out duration-150">
                            <span className="material-symbols-outlined">group</span>
                            <li className="">Operator</li>
                            </a>
                    </div>
                    
                    <div className="Home hover:bg-amber-600 transition duration-300">
                            <a href="/lookup" className=" transition ease-in-out duration-150">
                            <span className="material-symbols-outlined">person_search</span>
                            <li className="">LookUp</li>
                            </a>
                    </div>
                    </ul> 
                }
                {
                    user ?                 
                    <ul className="nav-wrapper border-b">
                    <div className="Home  hover:bg-amber-600 transition duration-300 cursor-pointer" onClick={() => handleLogout()}>
                        <a>
                            <span className="material-symbols-outlined">Logout</span>
                            <li className="">Sign Out</li>
                        </a>
                    </div>
                    </ul>
                    :
                    <ul className="nav-wrapper border-b">
                    <div className="Home  hover:bg-amber-600 transition duration-300 ">
                        <a href="/login" className=" ">
                            <span className="material-symbols-outlined">chevron_right</span>
                            <li className="">Login</li>
                        </a>
                    </div>
                    <div className="Home  hover:bg-amber-600 transition duration-300 ">
                        <a href="/register" className=" ">
                            <span className="material-symbols-outlined">chevron_right</span>
                            <li className="">Sign In</li>
                        </a>
                    </div>
                    </ul>
                }

            </div>
        </nav>
        </div>
    )
}


export default navbar