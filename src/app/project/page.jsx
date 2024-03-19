import { Inter, Oswald} from 'next/font/google'
import { Suspense } from 'react'


const oswald = Oswald({
  weight: ['400', '200'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export default function project(params) {
  console.log(params.project)
  return (
    <>
        
        <section id="heroProject">
            <main>
                <div className="projectHeading">
                    <h2 class="projectTitle">Movie Web App</h2>
                </div>
                <div className="heroImageDiv">
                    <img src="/img/moviepage.webp" alt="" class="heroImage" />
                </div>
                <div className={`descriptionSection`}>
                    <div>
                        <p className={`description ${oswald.className}`}>I've developed a responsive movie app using React.js, which offers a seamless experience for users across both desktop and mobile devices. This app leverages API data to enable movie searching and detailed movie descriptions. The entire application is contained within a single web page, ensuring a smooth and efficient user journey.</p>
                        <div style={{marginTop:"4rem"}}>
                             <a className={`preview ${oswald.className} ` }href="https://mayankmetflix.netlify.app">Vist the website live version</a>

                        </div>
                    </div>
                </div>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <div className="heroImageDiv2">
                        <img src="/img/moviepage2.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/moviepage3.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/moviepage4.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/moviepage5.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/moviepage6.webp" alt="" class="heroImage" />
                    </div>
                </Suspense>
              
            </main>
            
            <footer >
              <hr />
              <div className='footer'>
                <h3 className='footerContent'><em>Let&apos;s Work Together</em></h3>
                <p className='footerEmail'>sharanmayank5@gmail.com</p>
              </div>
              <hr />
            </footer>
           </section>
        
            
    </>
    
        
    
  )
}
