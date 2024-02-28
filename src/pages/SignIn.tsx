import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import Helfer from '../assets/Helfer.svg'
import Senior from '../assets/Senior.svg'
import Organisationnel from '../assets/Organisation.svg'
import oogle from '../assets/oogle.svg'
import G from '../assets/Google.svg'
import Twitter from '../assets/twitter.svg'

import { motion } from 'framer-motion';
import Button from '../components/Button'
import { useToggle } from 'rooks'


const SignIn = () => {

 const annimation = {
  visible:{x:0, opacity:1, rotate:0},
  hidden:{x:100, opacity:0, rotate:45}
 }

 const [open, toggle] = useToggle(true)

  return (
    <div className='container mx-auto'>
        <div className='flex  justify-between'>
          
            <div className='flex justify-center items-center flex-col'>
                    <div className='mt-10 flex justify-center items-center ml-20'>
                        <img src={logo} />
                    </div>  

                    <div className='mt-24 relative left-10 font-Gantari'>
                        <div className='font-black text-center text-3xl space-x-2 mb-10 left-64 h-10'>
                          Herzlich Willkommen!
                        </div>
                        <div className='left-64 text-slate-950'>
                          Hier können Sie sich als Helfer, als<br/>
                          Hilfesuchender oder als Organisation eines<br/>
                          ambulanten Dienstes bzw. <br/>
                          Nachbarschaftsnetzwerk registrieren und<br/>
                          anmelden.
                        </div>
                    </div>      


                    <div className='relative mt-16'>
                      
                        <div className="flex flex-row w-72 ml-20 justify-between">
                            <div className="border-b border-gray-950 w-56 mr-5"></div>
                              
                              <span className='font-Gantari font-thin text-xs	relative mt-1'>Anmeldenmit...</span>
                              
                            <div className="border-b border-gray-950 w-56 ml-5"></div>
                        </div>

                          <div className='flex justify-between'>

                            <button  className='bg-[#3B5998] rounded-sm w-36 h-[40px] relative mt-5 ml-10 left-7 flex justify-center items-center'>

                            <img src={Twitter} />
                            </button>

                            <button className='flex bg-[#EE3D24] rounded-sm w-36 h-[40px] relative
                              mt-5 ml-10 flex-row justify-center items-center'>
                              <img src={G}/>
                              <img src={oogle}/>

                            </button>
          
                          </div>
                        </div> 
                    </div>
            
            <div className='flex flex-row relative  right-10'>
                  
                  <div className='relative top-56 m-10'><img src={Helfer} /></div>
                  <div className='relative top-56 m-10'><img src={Senior} /></div>


                  <motion.div className='relative top-52'
                  variants={annimation}
                  whileHover= {{scale:1.2}}
                  animate={{x:open? 0: 100, opacity: open ? 1 : 0, rotate: open ? 0 : 45}}
                  >

                    <img src={Organisationnel} 
                    />
                    

                  </motion.div>

            </div>
        </div>
      
    </div>
  )
}

export default SignIn
