import style from '../styles/Project.module.css'
import { motion } from 'framer-motion'


export default function Project({ name, img, github, live, techUsed }) {

  return (
    <motion.div className={style.project}>

      <div className={style.projectName}>{name}</div>
      <img src={img} alt={name} className={style.projectImage} />

      <div className={style.techUsed}>Tech used</div>
      <div className={style.techs}>
        {techUsed.map(tech => <div key={tech} className={style.tech}>{tech}</div>)}
      </div>


      <div className={style.projectLinks}>
        <motion.a
          href={github}
          whileHover={{ scale: 1.1 }}
          target="_blank"
          rel="noopener noreferrer">
          <img src="/images/github.png" alt="Github" />
        </motion.a>
        <motion.a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}>
          <img src="/images/live.png" alt="Live" />
        </motion.a>
      </div>
    </motion.div>
  )
}