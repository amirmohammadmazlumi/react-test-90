import React, { useEffect } from "react";
import {avatar , Newblog} from "../../data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos"
import "aos/dist/aos.css"

export default function BanerCard() {
  useEffect(() => {
    AOS.init({duration: 3000})
  },[])
    const settings = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: true,
        pauseOnHover: true ,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return(
    <div className=" mt-24" >
        <div data-aos='fade-right' className="flex items-center  justify-center gap-x-5">
        {avatar.map(img => (
                <img className=" w-72 rounded-xl" key={img.id} src={img.img}/>
           ))}
        </div>
        <div className=" bg-gradient-to-l cursor-pointer from-zinc-800 via-zinc-900 to-zinc-700 mt-10 py-2">
        <Slider {...settings}>
        {
          Newblog.map(blog => (
           <div key={blog.id} className="flex  gap-2" >
           <div className="flex flex-row-reverse items-center " >
           <img className="rounded-full w-7" src={blog.img} />
            <h5 className=" pr-2 text-white font-medium ">{blog.title}</h5>
            <span className="pr-2 text-white font-medium" >{blog.count}</span>
            <span className="pr-2 text-white font-medium " >{blog.price}</span>
           </div>
            
           </div>
          ))
        }
    </Slider>
        </div>
       
    </div>
  )
}


export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}