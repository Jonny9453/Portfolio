

export default function Modal({children}) {
  return (
    <>
    
        <div style={{width:"100%", height:"100vh",backgroundColor:"pink",filter :"blur(500px)", position:"absolute", top:'0px'}} ></div>
        <div className="modal">
          {children}
        </div>
    
         
    </>
    
  )
}
