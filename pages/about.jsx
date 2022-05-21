import React from 'react';
import style from '../styles/About.module.css'
import { motion } from 'framer-motion';
import { getTime } from '../utils/utils'
import Head from 'next/head';

export default function About() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1.2, delay: 0.2, type: "just" }}
      className={style.about}>
      <Head>
        <title>Naveen | About</title>
      </Head>
      <div className={style.aboutTitle}>About Me</div>
      <div className={style.aboutDescription}>
        <p>
          I am Naveen Kumar Reddy. I live in Andhra Pradesh. I am a Full Stack Javascript Developer, with experience in React, Nodejs and MongoDB.I consider myself a forever student. I actually find joy in learning and doing new things.
        </p>
        <p>
          I like cricket, football and tennis. During these corona days, i picked up chess as a hobby and started to get good at it.
        </p>
        <p>
          I started to learn programming {getTime()} years ago. I initially went into data scientist route and started to learn python and played with Numpy module. But, I switched to wev development because, working with numbers is kind of boring. I prefered to work in the creative field.
        </p>

        <p>
          I also do have some beginner experience in languages like C++,Java.
        </p>
      </div>
    </motion.div>
  )
}

