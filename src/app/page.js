import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ 
  weight: ['100', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
 })

export default function Home() {
  return(
    <>
      

    <section id="Main" className={inter.className}>
      <main>
        <div className="mainHeading">
          <h1 className="heading">
            Hey I am Mayank<br/>
            <span className='position'> A&nbsp;</span>
            <span className="position"> Frontend Developer</span>
          </h1>
          <div className="work">
            <i className="bi bi-arrow-down-right"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
            </svg></i>( Work )
          </div>
        </div>
        <div className="headlinePara">
          <p className="headline">Crafting Exquisite Web Experiences: Merging Aesthetic Design with Detailed Development</p>
          <div> 
              <Link href="/email/i"><button className="emailButton">sharanmayank5@gmail.com</button></Link>
          </div>
        </div>
      </main>

      <section id="work">
        <h2>Work</h2>
        <div className="workProjects">
            <Link href="projects" ><Image src="/img/moviepage.webp" alt=""  className="projectImage" width={500} height={500}/></Link>
        </div>
      </section>

      <hr/>
      <section id="skills">
          <h2 className="skills">Skills</h2>
          
          <div className='descriptions'>
            <div className="logos">
              <Image className="logo" src="/img/icons8-html-48.svg" alt="html_Logo" height="100" width="100"/>
              <Image src="/img/icons8-css.svg" alt="" height="100" width="100"/>
              <Image src="/img/icons8-javascript-250.svg" alt="JavaScriptLogo" height="100" width="100"/>
              <Image src="/img/icons8-react-js-240.png" alt="" height="100" width="100"/>
              <Image src="/img/icons8-nodejs-256.png" alt="" height="100" width="100"/>
              <Image src="/img/icons8-mongodb-240.png" alt="" height="100" width="100"/>
            </div>
            <div className='skilldescription'>
              <div>
                
                <p >Proficient in HTML, CSS, and JavaScript to create dynamic and responsive user interfaces.</p>
              </div>
              <div>
                
                <p>Experienced in Node.js for building robust server-side applications and APIs.</p>
              </div>
              <div>
               
                <p> Skilled in leveraging React and Next.js frameworks to develop modern and efficient web applications.</p>
              </div>
              <div>
               
                <p>Proficient in MongoDB for database management, ensuring data integrity and scalability.</p>
              </div>
              <div>
               
                <p>Capable of seamlessly integrating APIs to enhance application functionality and user experience.</p>
              </div>
              <div>
                
                <p>Experienced in implementing authentication mechanisms, ensuring secure access control and user authentication.</p>
              </div>
              <div>
                
                <p>Equipped to handle both frontend and backend development, from design to deployment, ensuring seamless end-to-end solutions.</p>
              </div>
            </div>
            
           
            
          </div>
          
      </section>
      
      <section id="about">
        <h2 className='about'>About Me</h2>
        <div className='aboutdec'>
        <p className='aboutDescription'>Hi, I am Mayank a Developer with expertise in HTML, CSS, JavaScript,
           Node.js, React, and Next.js. With a strong foundation in frontend and
           backend technologies. I specialize in crafting visually appealing and
           fully functional web applications. My proficiency extends to database
           management using MongoDB, API integration, and implementing authentication
           mechanisms to ensure secure user experiences.<br/><br/>
           <Link href="https://www.canva.com/design/DAGRLcOfU7E/cTuFHc_Piva9o3Ncd_iVUw/edit?utm_content=DAGRLcOfU7E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
            Resume</Link></p>
           <div className='mydp'>
              <Image src='/img/Mydp.jpg'  alt=''   width={500} height={500} />
           </div>
          
        </div>
      </section>

<hr/>
    <footer>
        <section id="contact">
            <div className='contact'>
            <i className="bi bi-arrow-down-right"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
                </svg></i>
            contact
            </div>
            
            <div className='contactdec'>
            <p className='contactDescription'>Let&apos;s Work Together</p>
              <div className='contactBox'>
                  <Link href='email/i'>sharanmayank5@mail.com</Link>
                  <Link href='https://github.com/jonny9453?tab=repositories'>Github Profile</Link>
                  <Link href='https://www.linkedin.com/in/mayank-sharan-652717272/'>Linkedin Profile</Link>
              </div>
              
            </div>
            


        </section>
    </footer>
      
      <hr/>
    </section>
    </>
    
  )
  
}
