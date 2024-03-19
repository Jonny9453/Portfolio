'use client'

import  Modal  from '../../../components/modal.js'
import { useRouter } from 'next/navigation'
import './page.css'
import { useForm, ValidationError } from '@formspree/react';

export default function Email() {

    const router=useRouter();
    const [state, handleSubmit] = useForm("mpzvjpoy");
    if (state.succeeded) {
      return (<Modal>
        <p className='thanksMessage'>Thanks for joining!</p>
        </Modal>)
  }
  return (
    <Modal>
          <span className='closemodal' onClick={() => router.back()}>Close</span>
          <h2 className="talkHeading">Let&apos;s Talk</h2>
          <div>
          <form onSubmit={handleSubmit}>
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
              <label htmlFor="UserName">
                  UserName:
              </label>
              <input id='UserName' type='text' name='UseName'/>
              <ValidationError 
                  prefix="User" 
                  field="UserName"
                  errors={state.errors}
                />
            </div>
            
              <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
                <label htmlFor="email">
                Email Address:
                </label>
                <input  
                  id="email"
                  type="email" 
                  name="email"
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
            </div>
            
            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
              <label htmlFor="subject">
                  Subject:
              </label>
              <input id='subject' type='text' name='Subject'/>
              <ValidationError 
                  prefix="Subject" 
                  field="Subject"
                  errors={state.errors}
                />
            </div>

            <div style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
              <label htmlFor='message' >Message:</label>
              <textarea rows="4" cols="20"   id="message"name="message" autoFocus/>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            
             <button type="submit" disabled={state.submitting}>
                Submit
             </button>
            </form>
          </div>
          
    </Modal>
      
   
      
    
  )
}