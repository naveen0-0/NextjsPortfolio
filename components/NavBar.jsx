import React, { useState } from 'react';
import style from '../styles/NavBar.module.css'
import Link from 'next/link';


export default function NavBar() {
  const [dropdownOpen, setDropDownOpen] = useState(true);

  const ToggleDropDown = () => {
    setDropDownOpen(!dropdownOpen)
  }

  return (
    <div className={style.navbar}>
      <Link href="/">
        <div className={style.title}>
          <div className={style.titleText}>Naveen</div>
        </div>
      </Link>

      <div className={dropdownOpen ? style.links : style.showLinks}>
        <Link href="/about"><div onClick={() => setDropDownOpen(true)} className={style.navbarlink}>about</div></Link>
        <Link href="/skills"><div onClick={() => setDropDownOpen(true)} className={style.navbarlink}>skills</div></Link>
        <Link href="/projects"><div onClick={() => setDropDownOpen(true)} className={style.navbarlink}>projects</div></Link>
        <Link href="/contact"><div onClick={() => setDropDownOpen(true)} className={style.navbarlink}>contact</div></Link>
        <a href="/pdfs/resume.pdf" className={style.resume} target="_blank" download={true}>Resume</a>
      </div>

      <div className={style.burger} onClick={ToggleDropDown}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>

    </div>
  )
}