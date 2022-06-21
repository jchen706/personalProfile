import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import styles from "../../styles/Project.module.css"
import { Tech } from "./tech"
type CardProps = {
  title: string,
  paragraph: any,
  tech: string[],
  link?: string,
  hack?: string,
}

const Project: FunctionComponent<CardProps> = ({ title, paragraph, tech, link, hack }) => 
  <div className={styles.project}>
      <div className={styles.proj}>
         
        <div className={styles.title}>
          { typeof(link) !== 'undefined' && link != null 
          ? <><a href={link} className={styles.titleLink}>{title}</a> </>
          : title} 
          { typeof(hack) !== 'undefined' && hack != null && <div className={styles.hack}><i>{hack}</i></div>} 

          { typeof(link) !== 'undefined' && link != null && <div className={styles.link}>
            <a  className={styles.arrow} href={link}>
              <img src="/square-arrow-up-right-solid.svg"  height={18} width={18}   alt="Link To Project" />
            </a></div>} 

        </div>
        <div>          
          <p className={styles.projabout}> { paragraph } </p>
        </div> 
        <div className={styles.techstacks}> 
           {tech.map((object, i) => <Tech title={object} key={i}></Tech>) }
        </div> 
         
      </div>
      
</div>


export default Project;
