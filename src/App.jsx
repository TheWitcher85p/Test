import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {motion} from "framer-motion"

const App =()=> {
 

  return (
    <>
    
   <motion.div
   initial={
    {
      opacity:0,
      translateX:-400
    }
   }
   whileInView={{
    opacity:1,
    translateX:0
   }}
   exit={{
    opacity:0,
      translateX:-400
   }}
   transition={{duration:1}}
   >
    <h1>Hello My name is Chinthu</h1>
   </motion.div>
   <div>Hello</div>
   <div>Just</div>
   <motion.div
   initial={
    {
      opacity:0,
      translateX:-400
    }
   }
   whileInView={{
    opacity:1,
    translateX:0
   }}
   exit={{
    opacity:0,
      translateX:-400
   }}
   transition={{duration:1}}
   >Hold</motion.div>
   </>
  )
}

export default App
