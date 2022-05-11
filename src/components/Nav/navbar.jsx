import React from "react";
import s from './navbar.module.css';
import {NavLink} from "react-router-dom";
import NavItem from "./NavItem/navitem";


const Nav = (props) => {

    let sidebarElements = props.sidebarElem.map( (sidebarEl) => <NavItem name={sidebarEl.name} adress={sidebarEl.adress}/>)
    return(
        <nav className={s.nav}>
            {sidebarElements}
        </nav>
    )
}
export default Nav;
