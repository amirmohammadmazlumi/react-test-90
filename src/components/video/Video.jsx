import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos"
export default function Video() {
  useEffect(() => {
    AOS.init({ duration: 3000 })
  },[])
  return (
    <div className="mt-60 flex flex-col justify-center items-center" >
   <div className="text-center" data-aos="fade-down" >
   <h2 className="text-white text-4xl tracking-wider" >بیت‌پین؛ تجربه سرمایه‌گذاری نوین، دارایی نوین برای آینده ای نوین</h2>
      <p className="text-zinc-400 pt-6 text-xl" >ارز دیجیتال، یکی از هوشمندانه‌ترین و پرسود‌ترین دارایی‌های عصر دیجیتال به حساب می‌آید که قدم برداشتن به سوی آینده‌ای نوین را برای ما میسر می‌کند.</p>
   </div>
   
   <div className="max-w-3xl mt-10" >
    <video data-aos="fade-up" className="w-full rounded-lg " autoPlay loop muted src="image/main-motion2.mp4" ></video>
   </div>

    </div>
  )
}
