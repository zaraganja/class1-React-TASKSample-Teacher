import React,{useEffect,useState} from 'react'
import p1 from "../../public/person1.jpg"
import p2 from "../../public/person2 .jpg"

const TopBanner = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const topBannerImages =[
    p1,p2
  ]
  const [fade, setFade] = useState(true); // State to control fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % topBannerImages.length);
        setFade(true); // Start fade in after changing the image
      }, 600); // Wait for the fade-out to complete before changing the image
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [topBannerImages.length]);

  return (
    <div name={"topBanner"} className=' relative w-[100vw] h-[80vh] max-sm:h-auto overflow-y-hidden mt-[100px]  max-sm:mt-0 max-sm:place-content-center max-sm:place-items-center max-sm:flex  flex flex-row justify-around place-content-end  '>
    <img
        src={topBannerImages[currentImageIndex]}
        alt='topBanner'
        width={600}
        height={0}
        className={`w-[100%] h-auto object-contain max-sm:object-contain  transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
       />
       <div className={` ${currentImageIndex===0 ? ' bg-[#484b6a] ' : ' bg-gray-200'} hover:cursor-pointer border border-zinc-400 transition-opacity duration-500 w-[15px] h-[15px] rounded-full absolute flex bottom-2 self-center justify-center`}   />
       <div className={` ${currentImageIndex===1 ? ' bg-[#484b6a] ' : ' bg-gray-200'} hover:cursor-pointer border border-zinc-400 transition-opacity duration-500  w-[15px] h-[15px]  rounded-full absolute flex bottom-2 ml-[4%] max-sm:ml-[12%]  self-center justify-center  `} /> 
   
    </div>
  )
}

export default TopBanner