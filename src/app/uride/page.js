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
                    <h2 class="projectTitle">Uride</h2>
                </div>
                <div className="heroImageDiv">
                    <img src="/img/uridefront.webp" alt="" class="heroImage" />
                </div>
                <div className={`descriptionSection`}>
                    <div>
                        <p className={`description ${oswald.className}`}>I've developed a responsive movie app using Next.js, which offers a seamless experience for users across both desktop and mobile devices. This app leverages API data to enable google map, direction of the location and  descriptions of the routes. The entire application is contained within a single web page, ensuring a smooth and efficient user journey. And its also has authentication service and mongodb database to store youre your recent bookimgs and price you booked for.</p>
                        <div style={{marginTop:"4rem"}}>
                             <a className={`preview ${oswald.className} ` } href="https://uride-dhvg.vercel.app/">Vist the website live version</a>

                        </div>
                    </div>
                </div>
                <Suspense fallback={<p>Loading feed...</p>}>
                    <div className="heroImageDiv2">
                        <img src="/img/uridelogin.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/urideloginfront.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/map.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/location1.webp" alt="" class="heroImage" />
                    </div>
                    <div className="heroImageDiv2">
                        <img src="/img/location2.webp" alt="" class="heroImage" />
                    </div>
                </Suspense>
              
            </main>
            
            <footer >
              <hr />
              <div className='footer'>
                <h3 className='footerContent'><em>Let's Work Together</em></h3>
                <p className='footerEmail'>sharanmayank5@gmail.com</p>
              </div>
              <hr />
            </footer>
           </section>
        
            
    </>
    
        
    
  )
}
