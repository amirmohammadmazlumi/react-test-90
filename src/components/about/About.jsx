import React, {useEffect, useState} from "react";
import AOS from "aos"
import "aos/dist/aos"
export default function About() {

    useEffect(() => {
    AOS.init({ duration: 3000 })
    },[])

    const [activeimg , setActiveimg] = useState("خرید آسان")

    const activehandler = (active) => {
        setActiveimg(active)
        console.log(active);
    }
  return(
<div className="mt-28 max-w-[76rem] mx-auto" >
    <div className="flex justify-between items-center px-4" >
        <div data-aos="fade-left" className="max-w-md flex flex-col gap-y-8 " >
        {activeimg === 'خرید آسان' && 
        <>
        <h1 className="text-white text-4xl tracking-wide" >آسان شروع کن!</h1>
            <p className="text-zinc-400 tracking-wide " >هر آنچه برای تجربه یک تراکنش سریع و آسان نیاز دارید، در خرید آسان بیت‌پین برای شما فراهم است. برای خرید ارز دیجیتال دلخواهتان کافی است، از میان متنوع‌ترین رمزارزها، آن را انتخاب کنید و پس از ثبت سفارش، به صورت آنی در کیف پولتان دریافت کنید.              </p>
        </>
        }
        {activeimg === 'معامله' && 
        <>
        <h1 className="text-white text-4xl tracking-wide" >حرفه ای ادامه بده</h1>
            <p className="text-zinc-400 tracking-wide " >هر آنچه برای تجربه حرفه‌ای معامله‌گری نیاز دارید، در پلتفرم حرفه‌ای بیت‌پین برای شما فراهم است. با استفاده از ابزارهای معاملاتی کاربردی، حجم و عمق مناسب بازار و رابط کاربری آسان در سفارش‌گذاری، بیت‌پین همراه حرفه‌ای شما در معاملات و  انتقالات رمزارزی است.</p>
        </>
        }
            <div className="flex items-center" >
                <div className="border border-gray-300 rounded-lg overflow-hidden" >
                    <button onClick={() => activehandler("خرید آسان")} className={`${activeimg === 'خرید آسان' ? 'bg-green-700/10' : 'bg-zinc-900'    } w-40 py-3 text-white border-l border-gray-300`} >خرید آسان</button>
                    <button onClick={() => activehandler("معامله")} className={`${activeimg === 'معامله' ? 'bg-green-700/10' : 'bg-zinc-900'    } w-40 py-3 text-white border-l border-gray-300`} >معامله</button>
                </div>
            </div>
        </div>
        <div data-aos="fade-right" >
        {activeimg === 'خرید آسان' && 
        
            <img className="w-72 ml-20" src="image/main-otc.b6e5a63b0a514ba01d27.webp" alt="" />
        }
        {activeimg === 'معامله' && 
        
            <img className="w-72 ml-20" src="image/main-trade.7d43d96563249553877f.webp" alt="" />
        }
        </div>

        
    </div>
</div>
  ) 
}
