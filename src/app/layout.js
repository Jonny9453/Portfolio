'use client'

import { Inter, Oswald, Rokkitt, Libre_Baskerville} from 'next/font/google'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';

import './globals.css'
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

const inter = Inter({ 
  weight: ['100', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
 })

 const Libre = Libre_Baskerville({ 
  weight: [ '400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Libre'
 })

const oswald = Oswald({
  weight: ['400', '200'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const rokkitt = Rokkitt({
  weight: ['100', '200'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const DateTime=()=>{
  let [date, setDate]=useState(new Date())
  useEffect(()=>{
    let timer =setInterval(()=>setDate(new Date()),1000);
    return function cleanup(){
      clearInterval(timer);
    }
    
  })
  return (
    <>
      <p>{date.toLocaleString()}</p>
      
    </>
  )
}

export default function RootLayout(props) {
  const router=useRouter()

  // const loginSegments = useSelectedLayoutSegment('talk')
  // console.log(props.email)

  const pathname=usePathname()
  
 
  console.log(pathname)
  return (
    <html lang="en" className={`${inter.variable} ${Libre.variable}`}>
      
      <body >
      <section id="NavigationContainer" >
        <header id="Navigation">
          <nav className="navbar1">
            <Link href="/" style={{textDecoration:"none", color:"black"}}>Mayank</Link>
            <DateTime/>{/* Jhansi, India- 12:24:22 PM */}
          </nav>

          <nav className='dropdown'> 
                <h1 onClick={()=>document.getElementById('dropdiv').style.display="inline-block"}>A</h1>
                <div id='dropdiv'>
                  <div id='dropbox'>
                    <Link href="projects" className={`link ${pathname==='/projects' ? 'active' : null}`} >Work</Link>
                    <Link href="#about"  className={`link ${pathname==='/about' ? 'active' : null}`}>about</Link>
                    <Link href="/email/i" className={`link ${pathname==='/email/i' ? 'active' : null}`}>Lets Talk</Link>
                    <Link href="#"  className={`link ${pathname==='/email/i' ? 'active' : null}`} onClick={()=>document.getElementById('dropdiv').style.display='none'}>cancel</Link>
                  </div>
                  
                </div>
                
          </nav>
          <nav className="navbar2">
            <Link href="projects" className={`link ${pathname==='/projects' ? 'active' : null}`} >Work</Link>
            <Link href="#about"  className={`link ${pathname==='/about' ? 'active' : null}`}>about</Link>
            <button className="button" onClick={() => router.push('/email/i')}>Lets Talk</button>
          </nav>
          
        </header>
        <hr/>
      </section>
        {props.children}
        {props.modal &&props.modal}
      </body>
    </html>
  )
}


