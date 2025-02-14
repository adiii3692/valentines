import pokemon from '@/public/pokemon.png'
import Image from "next/image"

export default function Home(){
    return (
        <div className="w-full h-full flex flex-col items-center justify-items-center min-h-screen">
            <div className='flex flex-col flex-wrap items-center justify-center my-16'>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    RIGHT CHOICE!
                </h1>
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Here's your Starter Pokemon!
                </h1>
            </div>
            <div className='flex items-center justify-center mt-12'>
                <Image src={pokemon} alt='pokemon card' className='w-[80%] h-[50%]'/>
            </div>
            <footer className="mt-6 row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <p>Made with &hearts; by Adi (Ur Pookie fr)</p>
            </footer>
        </div>
    )
}