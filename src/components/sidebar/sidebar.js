import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './sidebar.css'
export default function sidebar() {
    return (
        <aside className={Styles.aside}>
            <Link className={Styles.link} to="/simple">Simple</Link>
            <Link className={Styles.link} to="/methods">Methods</Link>
            <Link className={Styles.link} to="/game">Game</Link>
        </aside>
    )
}
