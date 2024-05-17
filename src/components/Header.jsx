import React from "react";
import { NavBar } from "./NavBar";
import { Carrito } from "./Carrito";

export const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1> {}
            <NavBar/>
            <Carrito/>
        </header>
    )
}
