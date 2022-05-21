import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <motion.div
      className={styles.home}
      initial={{ x: "-100vw" }}
      animate={{ x: "0" }}
      transition={{ duration: 1, type: "tween" }}
    >
      <Head>
        <title>Naveen | Home</title>
      </Head>
      <div className={styles.homeText}>I am Naveen.<br />I am a Web Developer.</div>
      <div className={styles.image}><img src="/images/main.svg" alt="Main Image" /></div>
    </motion.div>
  )
}

