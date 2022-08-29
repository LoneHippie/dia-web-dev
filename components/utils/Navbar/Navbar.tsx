import React from 'react'
import Link from 'next/link'
import { NavMenuExpanded, NavMenuSmall } from './components';
import useNavbar from './useNavbar';


import classes from "./Navbar.module.scss";


const Navbar = () => {

    const { isMobile, basePaths } = useNavbar()

    return (
        <div className={classes.nav}>

            <Link href="/">
                <img 
                    src={"/static/logo-white.svg"}
                    className={classes.nav_logo}
                    alt="Back to home page"
                />
            </Link>

            {
                isMobile ? (
                    <NavMenuSmall basePaths={basePaths} /> 
                ) : (
                    <NavMenuExpanded basePaths={basePaths} />
                )
            }
        </div>
    )
}

export default Navbar