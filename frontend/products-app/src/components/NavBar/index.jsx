//import { Component } from "react"
import './style.css';

export const NavBar = () => {
    

    return(

        <nav>

            <div className='Inputsearch'>
                <label htmlFor="" id="Txtsearch">Pesquisar</label>
                <input type="text" placeholder="Pesquisar produto"/>
            </div>
            <div className='profile'>
                <img className="imgProfile" src="" alt="" />
                <span className="nameProfile">Misael</span>
            </div>

        </nav>

    )

}