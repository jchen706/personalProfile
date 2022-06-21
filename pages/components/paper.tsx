import React, { FunctionComponent } from 'react'; // importing FunctionComponent
import styles from "../../styles/Paper.module.css"
type PaperProps = {
  title: string,
  author: any, 
  conf?: string,
  conflink?: string,
  link: string
}

export const Paper: FunctionComponent<PaperProps> = ({ title, author, conf, conflink, link }) => <div>
<ul>
<li>
  <div>
    <strong className={styles.pubtitle}>
      {/* DynaaDCP: Dynamic Navigation of Autonomous Agents for Distributed Capture Processing */}
      { title }
      </strong>
    <br/>
    { author }
    {/* Sam Jijina, Ramyad Hadidi, <i>Jun Chen</i>, Zhen Jiang, Ashutosh Dhekne, Hyesoon Kim */}
    
    <br/>
    {conf !== ''  ? <>
    <span className={styles.pubconf}>
      <a className={styles.conflink} href={conflink}>
        {conf}
      </a>
    </span>
    <br/>
    </> : null
    }

    <a className="btn btn-light btn-outline-primary btn-sm pub-btn" href={link}>Paper</a>
  </div>
</li>
</ul>
</div>

// const el = <Paper title="Welcome!" paragraph="To this example" />