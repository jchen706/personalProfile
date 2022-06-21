import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Paper from './components/paper'
import Project  from './components/project'
// import {github} from '../public/github-square-brands.svg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
      {/* <!-- <img src="jun.jpg" class=" img-fluid mx-auto d-block rounded-circle" alt="Responsive image"> --> */}
      {/* <Image> </Image>  */}
      <div className={styles.heading}>
        <div className={styles.bioLeft}>
        <div className={styles.profilePic}>
          <img className={styles.pic} src="/1530324501153.jpg"  height={186} width={186}  alt="Linkedin" />
        </div>
        <div className={styles.nameRes}>
            <h1 className="cover-heading">Jun Chen</h1>
            <div className={styles.resume}>       
                <a href="/Jun_Chen_Summer_2022_.pdf" className={styles.cvOverlay2}> 
                  
                  <div className={styles.cvOverlay}>
                    {/* <div className={styles.cvText}>CV</div> */}
                    <img src="/file-solid.svg"  height={24} width={24} className={styles.paperOver}  alt="Resume" />
                  </div>
                  <div className={styles.resumeText}>Resume</div>
                </a>  
            </div>
        </div>
       
        <div className={styles.contacts}>
        <h1>
          <a href="www.linkedin.com/in/junchen12" className={styles.homeColorBlack}>
          <img src="/linkedin-brands.svg"  height={32} width={32}  alt="Linkedin" />
          </a>
        </h1>
        <h1>
          <a href="https://github.com/jchen706" className={styles.homeColorBlack}>
            <img src="/github-square-brands.svg" height={32} width={32}  alt="Github" />
          </a>        
      </h1>
      	<h1>
      	<a href="mailto:jchen706@gatech.edu" className={styles.homeColorBlack}> 
          <img src="/square-envelope-solid.svg"  height={32} width={32}   alt="Email" />

        </a>  
    	</h1>  
      </div>
        </div>
      </div>
     
      </Head>

      <main className={styles.main}>
        <div className="paperSection">
          <h5>Papers</h5>
          <Paper title="CuPBoP: CUDA for Parallelized and Broad-range Processors" 
          // Ruobing Han, Jun Chen, Bhanu Garg, Jeffrey Young, Jaewoong Sim, Hyesoon Kim
          author={<>Ruobing Han, <i><strong>Jun Chen</strong></i>, Bhanu Garg, Jeffrey Young, Jaewoong Sim, Hyesoon Kim </>}
          link="https://arxiv.org/abs/2206.07896"
          conf=''
          ></Paper>
          <Paper title=" DynaaDCP: Dynamic Navigation of Autonomous Agents for Distributed Capture Processing" 
          author={<>Sam Jijina, Ramyad Hadidi, <i><strong>Jun Chen</strong></i>, Zhen Jiang, Ashutosh Dhekne, Hyesoon Kim </>}
          link="http://prism.sejong.ac.kr/dossa-4/dossa_paper/DynaaDCP_Final.pdf"
          conf="DOSSA-4 @ HPCA'22"
          conflink="http://prism.sejong.ac.kr/dossa-4/"
          ></Paper>
        </div>
        <div className="projectSection">
          <h5>Projects</h5>
          {/* <Project title="CryptoAll" paragraph="aaaaa" tech={["C++", "LLVM", "CUDA"]}/> */}
          <Project title="Cupbob" paragraph="CuPBoP is proposed to execute CUDA on non-NVIDIA devices 
          without relying on any portable programming languages. Compared with existing work that executes CUDA on non-NVIDIA devices, CuPBoP does not require manual modification of the CUDA source code. I worked on CUDA runtime for x86 architecture
and used LLVM to manipulate bitcode generated from frontend compilation. I helped with benchmarking and debugging backend compiler issues and the runtime system." tech={["C++", "LLVM", "CUDA"]} 
link="https://arxiv.org/abs/2206.07896"
/>
          <Project title="Course Critique" paragraph="Created a course and professor search for students interested in the grade point average or letter grade percentages of 
offered courses" 
          tech={["Python",  "MySQL", "Elasticsearch", "AWS Lambda", "AWS API Gateway", "AWS RDS", "JDBC Driver", "Logstash"]}
          link="https://critique.gatech.edu/" />
          <Project title="Distributed OpenDroneMap with gRPC" 
           paragraph= {<>Implemented OpenDroneMap with gRPC for distributed 3D reconstruction for the  <span className={styles.paperBold}> DynaaDCP: Dynamic Navigation of Autonomous Agents for Distributed Capture Processing </span></>} 
           tech={["Python", "gRPC"]}/>
          <Project title="2ndGenSports" 
          paragraph="A Flask application that collects the data to determine the number of second genration athletes per a collegitate sports team" 
          tech={["Python", "Flask", "AWS DynamoDB", "Selenium", "NLTK"]}
          link="https://github.com/jchen706/2ndGenSports"/>
          <Project title="BuzzTracker" paragraph="Donation tracker application" 
          tech={["Java", "Android"]}
          link="https://github.com/giordanoj/buzzTracker"/>
        </div>
        <div className="hackathons">
          <h5>Hackathons</h5>
          <Project title="Devpost Profile" paragraph="Hackathons: HackMIT 2019, SwampHacks 2019, CUhackit2019, HackGSU 2018" tech={[""]}
          link="https://devpost.com/jchen706"/>
        </div>
      </main>
    </div>
  )
}

export default Home
