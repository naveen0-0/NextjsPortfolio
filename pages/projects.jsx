import React from 'react';
import style from '../styles/Projects.module.css'
import Project from '../components/Project'
import Head from 'next/head';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Naveen | Projects</title>
      </Head>
      <div className={style.projectsTitle}>Projects</div>
      <div className={style.projectsContainer}>
        <Project
          img="/images/books.jpg"
          name="Converse"
          github="https://github.com/naveen0-0/converseclient"
          live="https://converse-1910.netlify.app/"
          techUsed={["Html", "Css", "Javascript", "React", "Redux", "Nodejs", "Expressjs", "Mongodb"]}
        />
        <Project
          img="/images/blogposter.png"
          name="FullStack Blog"
          github="https://github.com/naveen0-0/realblogclient/"
          live="https://blogreal.netlify.app"
          techUsed={["Html", "Css", "Javascript", "React", "Redux", "Nodejs", "Expressjs", "Mongodb"]}
        />
        <Project
          img="/images/newspaper.jpg"
          name="News"
          github="https://github.com/naveen0-0/news"
          live="https://newsroll.netlify.app/"
          techUsed={["Html", "Css", "Javascript", "React", "Api"]}
        />
        <Project
          img="/images/movie.jpg"
          name="Movie"
          github="https://github.com/naveen0-0/newmovie"
          live="https://mynori.netlify.app/"
          techUsed={["Html", "Css", "Javascript", "React", "Api"]}
        />
        <Project
          img="/images/shoppp.png"
          name="FullStack Shoppp"
          github="https://github.com/naveen0-0/ecommerceclient"
          live="https://xhoppie.netlify.app/"
          techUsed={["Html", "Css", "Javascript", "React", "Redux", "Nodejs", "Expressjs", "Mongodb"]}
        />
        <Project
          img="/images/covid.jpg"
          name="Covid Tracker"
          github="https://github.com/naveen0-0/trackerc19"
          live="https://trackerc19.netlify.app/"
          techUsed={["Html", "Css", "Javascript", "React", "Api"]}
        />
      </div>
    </div>
  )
}
