import Link from 'next/link'
import React from 'react'
import { BasePath } from '../../types';

import classes from "./NavMenuExpanded.module.scss";

interface Props {
    basePaths: BasePath[];
}

const NavMenuExpanded = ({ basePaths }: Props) => {
  return (
    <nav className={classes.nav}>

        <ul className={classes.nav_list}>
            {basePaths.map((el, index) => (
                <li className={classes.nav_list_item} key={`path-expanded-${index}`}>
                    <Link
                        className={classes.nav_list_item_link}
                        href={el.path}
                    >
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavMenuExpanded