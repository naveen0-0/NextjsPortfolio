import React, { useState } from 'react';
import style from '../styles/Contact.module.css'
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import Head from 'next/head';

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false)

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const subjectChange = (e) => setSubject(e.target.value);
  const messageChange = (e) => setMessage(e.target.value);

  function sendMail(e) {
    e.preventDefault();
    setSubmitting(true)
    
    const template = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }

    
    emailjs.send("service_yvsd6pm", "template_zc080aa", template, "p4D5uyCTOzuEE75ss")
    .then(() => {
      setName("");
      setEmail("")
      setSubject("")
      setMessage("")
      setMailSent(true)
    })
    .catch((err) => console.log("Error,", err))
    .finally(() => {
      setSubmitting(false)
    })
  }
  
  
  return (
    <motion.div className={style.formContainer}
    initial={{ x: "-100vw" }}
    animate={{ x: "0" }}
    transition={{ duration: 1, type: "tween" }}
    >
      <Head>
        <title>Naveen | Contact</title>
      </Head>

      <div className={style.formTitle}>Contact Form</div>

      <form onSubmit={sendMail} method="POST" className={style.form}>
        <input type="text" name="name" placeholder="Enter your name" required value={name} onChange={nameChange} className={style.name}/>
        <input type="email" name="email" placeholder="Enter your email" required value={email} onChange={emailChange} className={style.email}/>
        <textarea name="subject" cols="30" rows="2" placeholder="Enter the Subject" required value={subject} onChange={subjectChange} className={style.subject}></textarea>
        <textarea name="message" cols="30" rows="5" placeholder="Enter the Message" required value={message} onChange={messageChange} className={style.message}></textarea>


        <button type='submit' disabled={submitting} className={style.formsubmit}>
          {submitting?<img src='/images/spinner.gif' className={style.spinner}/> : "Send"}
        </button>
      </form>

      <div className={style.mediaLinks}>
        <a href="https://www.facebook.com/naveen12309/" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="https://twitter.com/Naveen87763128" target="_blank" rel="noopener noreferrer"><img src="/images/twitter.png" alt="Twitter" /></a>
        <a href="https://github.com/naveen0-0" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="Github" /></a>
      </div>

    </motion.div>
  )
}