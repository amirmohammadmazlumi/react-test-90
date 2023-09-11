import React from "react";
import {guideImg} from "../../data"
export default function Guide() {
  return (
    <div className="mt-44 flex flex-col items-center  justify-center" >
    <div className=" mr-80 w-full mb-8" >
    <h3 className="text-white text-4xl tracking-wide font-semibold" >راهنمای ورود به دنیا ارز دیجیتال</h3>
    </div>
       
    <div className="flex gap-x-8" >
        {guideImg.map(guid => (
            <div key={guid.id} className="flex flex-col" >
                <img className="w-full" src={guid.img} />
                <div className="pt-4" >
                    <h1 className="text-zinc-200 tracking-tight font-medium" >{guid.title}</h1>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}
