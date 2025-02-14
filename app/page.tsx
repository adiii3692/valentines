'use client'

import { motion } from "framer-motion";
import { useState } from 'react'
import gooseGlassesLarge from '../public/gooseGlassesLarge.png'
import gooseHeartLarge from '../public/gooseHeartLarge.png'
import balloon from '../public/balloon.png'

import { useRouter } from "next/navigation";
import Image from "next/image"

export default function Home() {

  const [clicked,setClicked] = useState<boolean>(false)
  const router = useRouter()

  return (
    <div className="w-full h-full flex flex-col items-center justify-items-center min-h-screen">
      <motion.div initial={{ y: "100vh" }} animate={{ y: "-100%" }} transition={{ duration: 5, ease: "easeInOut" }} className="fixed inset-0 flex justify-center items-end">
        <Image src={balloon} alt="Heart Balloon" />
      </motion.div>
      <main className="w-full flex flex-col items-center justify-center">
        <div className='w-full flex items-center justify-evenly'>
          <div className="w-full flex items-center justify-start">
            <Image src={gooseHeartLarge} alt='Goose Heart' className='my-12 mx-32'/>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Happy Valentine's Day <s>Silly Goose</s> Pookie
          </h1>
        </div>
        <div className='w-full flex flex-col justify-center items-center my-16'>
          <p className="text-base sm:text-normal md:text-lg lg:text-xl xl:text-2xl">
            Will you be my Valentine?
          </p>
          <div className='w-full flex items-center justify-evenly my-8'>
            {clicked?(
              <>
                <button onClick={()=>router.push('/success')} className='border rounded-md px-8 py-2'>Yes</button>
                <button onClick={()=>setClicked(!clicked)} className='border rounded-md px-8 py-2'>No</button>
              </>
            ):(
              <>
                <button onClick={()=>setClicked(!clicked)} className='border rounded-md px-8 py-2'>No</button>
                <button onClick={()=>router.push('/success')} className='border rounded-md px-8 py-2'>Yes</button>
              </>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-end">
          <Image src={gooseGlassesLarge} alt='Goose Heart' className='my-12 mx-32'/>
        </div>
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made with &hearts; by Adi (Ur Pookie fr)</p>
      </footer>
    </div>
  );
}
