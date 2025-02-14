import gooseGlasses from  '../public/gooseGlasses.png'
import gooseGlassesLarge from '../public/gooseGlassesLarge.png'
import gooseHeart from '../public/gooseHeart.png'
import gooseHeartLarge from '../public/gooseHeartLarge.png'

import cat from '../public/oiia-oiiaoiia.webp'

import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-items-center min-h-screen">
      <main className="w-full flex flex-col items-center justify-center">
        <div className='w-full flex items-center justify-evenly'>
          <div className="w-full flex items-center justify-start">
            <Image src={gooseHeartLarge} alt='Goose Heart' className='my-16 mx-32'/>
          </div>
          <div className="w-full flex items-center justify-end">
            <Image src={cat} alt='Ooiiaa Cat' className='h-[128px] w-[128px] my-16 mx-32'/>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Happy Valentine's Day <s>Silly Goose</s> Pookie
          </h1>
        </div>
        <div className="w-full flex items-center justify-end">
          <Image src={gooseGlassesLarge} alt='Goose Heart' className='my-16 mx-32'/>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Made with &hearts; by Adi (Ur Pookie fr)</p>
      </footer>
    </div>
  );
}
