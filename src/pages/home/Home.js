import React , {useState ,useEffect } from "react";
import Main from "../../components/main/Main"
import BanerCard from "../../components/banerCard/BanerCard"
import Table from "../../components/table/Table"
import About from "../../components/about/About"
import Video from "../../components/video/Video"
import Guide from "../../components/guide/Guide"
import { ThreeDots } from "react-loader-spinner"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-zinc-900" >
            {/* <img src="image/Ripple-2.2s-200px (1).svg" alt="" /> */}
            <ThreeDots 
height="80" 
width="80" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
            
        </div>
      ) : (
        <>
        <div className="bg-zinc-900" >
       <Main/>
       <BanerCard/>
       <Table/>
        <About/>
        <Video/>
        <Guide/>
     </div>
        </>
      )}
    </>
  )
}
