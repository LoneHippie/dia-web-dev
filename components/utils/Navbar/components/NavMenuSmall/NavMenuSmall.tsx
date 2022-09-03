import { BasePath } from '@components/utils/Layout/types';
import Link from 'next/link'
import React from 'react'

import classes from "./NavMenuSmall.module.scss";

interface Props {
    basePaths: BasePath[];
}

const NavMenuSmall = ({ basePaths }: Props) => {

  return (
    <div className={classes.nav_btn}>

    <input type="checkbox" className={classes.nav_btn__checkbox} id="nav-toggle"></input>
    
    <label htmlFor="nav-toggle" className={classes.nav_btn__button}>
        <span className={ classes.nav_btn__icon}>&nbsp;</span>
    </label>

    <div className={classes.nav_btn__background}>&nbsp;</div>

    <nav className={classes.nav_btn__nav}>

        <ul className={classes.nav_btn__list}>
            {basePaths.map((el, index) => (
                <li className={classes.nav_btn__item} key={`path-small-${index}`}>
                    <Link href={el.path}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>

</div>
  )
}

export default NavMenuSmall