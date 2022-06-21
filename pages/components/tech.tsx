import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import styles from "../../styles/Tech.module.css"
type TechProps = {
  title: string,
}

const Tech: FunctionComponent<TechProps> = ({ title}) => 
  <div className={styles.techstack}>
      <div className={styles.tech}>
        <div className={styles.title}>
          { title }
        </div>
      </div>
</div>

export default Tech;
