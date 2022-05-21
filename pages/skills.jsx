import React from 'react';
import style from '../styles/Skills.module.css'
import Skill from '../components/Skill';
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Skills() {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1, type: "tween" }}
    >
      <Head>
        <title>Naveen | Skills</title>
      </Head>
      <div className={style.skillTitle}>Skills</div>
      <div className={style.skillsContainer}>
        <Skill
          img="/images/html.png"
          name="Html"
        />
        <Skill
          img="/images/css.png"
          name="Css"
        />
        <Skill
          img="/images/javascript.png"
          name="Javascript"
        />
        <Skill
          img="/images/bootstrap.png"
          name="Bootstrap"
        />
        <Skill
          img="/images/jquery.png"
          name="Jquery"
        />
        <Skill
          img="/images/sass.png"
          name="Sass"
        />
        <Skill
          img="/images/react.png"
          name="React"
        />
        <Skill
          img="/images/redux.png"
          name="redux"
        />
        <Skill
          img="/images/nodejs.png"
          name="NodeJS"
        />
        <Skill
          img="/images/express.png"
          name="Express"
        />
        <Skill
          img="/images/mongodb.png"
          name="MongoDB"
        />
      </div>
    </motion.div>
  )
}