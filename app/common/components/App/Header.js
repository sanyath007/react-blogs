// app/components/App/Header.js

import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link
            to={{pathname: '/'}}
            className={styles['brand']}>
            Sanyath Wiki
          </Link>

          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/'}}
                className={styles['menu__link']}>
                Home
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/about'}}
                className={styles['menu__link']}>
                About
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/pages'}}
                className={styles['menu__link']}>
                Search pages
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
