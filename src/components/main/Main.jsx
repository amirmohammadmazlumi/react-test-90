import React, { useEffect , useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Typewriter from "typewriter-effect"
import {SlArrowUp} from "react-icons/sl"

export default function Main() {



  const [showButton, setShowButton] =useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({top: 0, left: 0   , behavior: 'smooth'})
  }
  useEffect(()=> {
      AOS.init({duration: 3000})
  },[])
  return (
    <div  className=" pt-20  " >
        <div className="flex justify-between items-center px-4">
            <div className="flex flex-col gap-y-4  mr-32" data-aos='fade-left' >
            <h1 className="  w-80 text-white text-5xl font-medium"  >
            <Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["حرفه‌ای ادامه بده آسان شروع کن " ],
             
            }}
             />
            </h1>
            <p  className="select-none text-gray-300 text-lg" >بازار حرفه‌ای فروش خرید ارز دیجیتال با بالاترین سطح امنیت و کاربری آسان</p>
            <form className=' mt-8 md:flex  justify-start w-full   ' >
              <div className='group md:max-w-[18rem]  w-full'>
                <div className=' bg-white  dark:bg-zinc-800 cursor-text  flex items-center group-focus-within:border-emerald-400 border-b border-gray-300 dark:border-neutral-500 rounded-lg h-12 px-3 relative'>
                <span className='text-xs absolute top-4 group-focus-within:top-0 cursor-default h-0 select-none text-gray-400 '>شماره موبایل  یا ایمیل خود را وارد کنید.</span>
                <input type="text"  className='w-full mt-2 bg-white dark:bg-zinc-800 h-8 outline-none text-gray-200 text-sm '/>
                </div>
                
              </div>
              <button className=' bg-emerald-400 md:mr-2 mr-0 rounded-lg  md:w-24 px-5 mt-4 md:mt-0  w-full  h-12 text-zinc-800  '>شروع</button>
            </form>

            </div>
           
            <div   data-aos='fade-right' className="max-w-3xl ">
                <img  className="w-full" src="image/logo:main.webp" alt="" />
            </div>
        </div>
        <div className='flex justify-center'>
      {showButton && (
        <button
          onClick={goToTop}
          className={`fixed bottom-4 left-4 z-50 bg-zinc-800 text-white p-4 rounded-full ${showButton ? '' : 'hidden'}`}
        >
          <SlArrowUp/>
        </button>
      )}
    </div>

       
    </div>
  )
}
