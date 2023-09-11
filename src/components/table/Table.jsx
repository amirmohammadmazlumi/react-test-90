import React , {useEffect, useState} from "react"
import {thead , currencies , profits , damage} from "../../data"

import AOS from "aos"
import "aos/dist/aos.css"
export default function Table () {
  useEffect(() => {
    AOS.init({duration: 3000})
  },[]);
  const [activeTab , setActiveTab] = useState("رمز‌ارز‌های‌برتر")
  const [activebtc , setActiveBtc] = useState("تومان")

  const clickTab = tab => {
    setActiveTab(tab)
    console.log(tab );
  }

  const clickBtc = btc => {
      setActiveBtc(btc)

  }

  

  return (
    <div data-aos="fade-left" className="mt-8 max-w-[76rem] bg-zinc-800 pb-8 rounded-2xl overflow-hidden mx-auto" >
      <div className="flex justify-between px-12 items-center" >
        <div className="flex items-center gap-x-6" >
          <button className={`${activeTab === 'رمز‌ارز‌های‌برتر' ? ' border-b-2 border-emerald-400 text-white' : 'bg-zinc-800' } text-zinc-500 py-4`} onClick={() => clickTab("رمز‌ارز‌های‌برتر")} >
          رمز‌ارز‌های‌برتر
          </button>
          <button className={`${activeTab === 'پرسود‌ها' ? ' border-b-2 border-emerald-400 text-white' : 'bg-zinc-800' } text-zinc-500 py-4`} onClick={() => clickTab("پرسود‌ها")} >
        پرسود‌ها
          </button>
          <button className={`${activeTab === 'پرضرر‌ها' ? ' border-b-2 border-emerald-400 text-white' : 'bg-zinc-800' } text-zinc-500 py-4`} onClick={() => clickTab("پرضرر‌ها")} >
          پرضرر‌ها
          </button>
        </div>
        <div className="flex items-center" >
        <div className="border border-gray-300 overflow-hidden rounded-lg" >
        <button onClick={() => clickBtc("تومان") } className={` ${activebtc === 'تومان' ? 'bg-green-700/10' : 'bg-zinc-800'} w-20 py-2 border-l border-gray-300 text-white`} >تومان</button>
        <button onClick={() => clickBtc("تتر") } className={`${activebtc === 'تتر' ? 'bg-green-700/10' : 'bg-zinc-800'} w-20 py-2 text-white` } >تتر</button>
        </div>
        
        </div>
      </div>
      <hr className="border-gray-500" />
     
      <div className="flex justify-between px-12 items-center w-full " >
          {
            thead.map(head => (
              <div key={head.id} className="text-white  py-6 font-light " >
                <span className=" px-7" >{head.title}</span>
              </div>
            ))
          }

      </div>
      {activeTab === 'رمز‌ارز‌های‌برتر' && 
      <div className="gap-y-6 flex flex-col group items-center" >
      {currencies.map(body => (
        <div key={body.id} className="w-full group-hover:blur-sm  hover:!blur-none cursor-pointer hover:bg-green-700/10 " >
        <div  className="flex justify-between px-12 items-center " >
                <div className="w-56  flex pr-4" >
                <img className="w-8 h-8" src={body.img} />
                      <div className="ps-2" >
                        <h1 className="text-white tracking-wide" >{body.title}</h1>
                        <span className="text-zinc-500 uppercase text-sm" >{body.name}</span>
                      </div>
                </div>
                <div className="w-56 " >
                <span className="text-white text-sm px-10" >{body.count}</span>
                </div>
                <div className="w-56 " >
                <span className="text-red-500 text-sm px-20" >{body.price}</span>
                </div>
                <div className="w-56 " >
                <div className="mr-16 bg-emerald-400 py-4  text-center rounded-lg" >
                <button className="text-zinc-900" >خرید / فروش</button>
                </div>

                </div>
              </div>
        </div>
              
            ))}
      </div>
      }
    
          
        {
          activeTab === 'پرسود‌ها' && 
          <div className="gap-y-6 flex flex-col group items-center" >
          {profits.map(fits => (
        <div key={fits.id} className="w-full group-hover:blur-sm  hover:!blur-none cursor-pointer hover:bg-green-700/10 " >
        <div  className="flex justify-between px-12 items-center " >
                <div className="w-56  flex pr-4" >
                <img className="w-8 h-8" src={fits.img} />
                      <div className="ps-2" >
                        <h1 className="text-white tracking-wide" >{fits.title}</h1>
                        <span className="text-zinc-500 uppercase text-sm" >{fits.name}</span>
                      </div>
                </div>
                <div className="w-56 " >
                <span className="text-white text-sm px-10" >{fits.count}</span>
                </div>
                <div className="w-56 " >
                <span className="text-emerald-400 text-sm px-20" >{fits.price}</span>
                </div>
                <div className="w-56 " >
                <div className="mr-16 bg-emerald-400 py-4  text-center rounded-lg" >
                <button className="text-zinc-900" >خرید / فروش</button>
                </div>

                </div>
              </div>
        </div>
              
            ))}
      </div>
        }

        {
          activeTab === 'پرضرر‌ها' && 
          <div className="gap-y-6 flex flex-col group items-center" >
          {damage.map(dam => (
        <div key={dam.id} className="w-full group-hover:blur-sm  hover:!blur-none cursor-pointer hover:bg-green-700/10 " >
        <div  className="flex justify-between px-12 items-center " >
                <div className="w-56  flex pr-4" >
                <img className="w-8 h-8" src={dam.img} />
                      <div className="ps-2" >
                        <h1 className="text-white tracking-wide" >{dam.title}</h1>
                        <span className="text-zinc-500 uppercase text-sm" >{dam.name}</span>
                      </div>
                </div>
                <div className="w-56 " >
                <span className="text-white text-sm px-10" >{dam.count}</span>
                </div>
                <div className="w-56 " >
                <span className="text-red-500 text-sm px-20" >{dam.price}</span>
                </div>
                <div className="w-56 " >
                <div className="mr-16 bg-emerald-400 py-4  text-center rounded-lg" >
                <button className="text-zinc-900" >خرید / فروش</button>
                </div>

                </div>
              </div>
        </div>
              
            ))}
      </div>
        }
        <div className="flex items-center justify-center pt-4" >
      <button  className=" text-emerald-400 tracking-wide text-lg font-medium" >همه ارز‌ها</button>
      </div>
    </div>
  )
}


