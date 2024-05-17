import React from "react"
import { Carrito } from "./Carrito"

export const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-menu">
                    <li><a className="nav-link" href="#">Inicio</a></li>
                    <li><a className="nav-link" href="#">Telefonos</a></li>
                    <li><a className="nav-link" href="#">Accesorios</a></li>
                    <li><a className="nav-link" href="#">Informacion de Nosotros</a></li> 
                </ul>
            </nav>
        
        </header>
    )
}