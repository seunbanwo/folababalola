import React from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import Logo from "./logo";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner">
        {/* <div className='logo'>Ollie</div> */}
        <div className="logo">
          {/* <Link href="/">fola</Link> */}
          <a href="/">
            <Logo />
          </a>
          {/* fola */}
        </div>
        <nav className="nav">
          <li>
            <a href="/fola-at-fifty">Fola at 50</a>
          </li>
          <li>
            <a href="/fola-at-fifty/rsvp">RSVP</a>
          </li>
          {/* <li>
            <a href='/design'>Design</a>
          </li>
          <li>
            <a href='/strategy'>Strategy</a>
          </li>
          <li>
            <a href='/cases'>Cases</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/why'>Why work with us?</a>
          </li> */}
        </nav>
        <div className="link">
          <a href="/fola-at-fifty">Fola at 50</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
