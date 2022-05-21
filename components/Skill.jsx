import React from 'react'
import style from '../styles/Skill.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Skill({ name, img }) {
  return (
    <motion.div className={style.skill} >
      <img src={img} alt={name} className={style.skillImage} />
      <div className={style.skillName}>{name}</div>
    </motion.div>
  )
}