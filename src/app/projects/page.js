import Link from 'next/link'
import "./page.css"
import Image from 'next/image'

export default function page() {
  return (
   <>
      <h2 className='headingWork'>Work</h2>
      <section id="work" className='projectswork'>
        <div>
            <div className="workProjects">
                <Link href="MovieApp#heroProject" ><Image src="/img/moviepage.webp" alt=""  className="projectImage" width={500} height={500}/></Link>
            </div>
            <h2 style={{color:"black", padding:"1rem", fontSize:"2rem"}}>Movie App</h2>
        </div>
        
        <div>
            <div className="workProjects">
                <Link href="uride" ><Image src="/img/urideloginfront.webp" alt=""  className="projectImage" width={500} height={500}/></Link>
            </div>
            <h2 style={{color:"black", padding:"1rem", fontSize:"2rem"}}>Uride</h2>
        </div>
       
             
      </section>
   </>
  )
}
