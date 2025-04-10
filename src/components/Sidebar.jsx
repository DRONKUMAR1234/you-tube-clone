import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import { IoMdMusicalNote } from "react-icons/io";
import { PiFilmSlateBold } from "react-icons/pi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { BsLightbulb } from "react-icons/bs";
import { GiHanger } from "react-icons/gi";
import { SiPodcastindex } from "react-icons/si";
import { PiBroadcastFill } from "react-icons/pi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import YouTube from "../../public/you.jpg";
import Studio from "../../public/studio.png";
import Music from "../../public/music.png";
import Kids from "../../public/kids.png";
function Sidebar(){
  const sidebarItems =[
    {
      id:1,
      name:"Home",
      icon:<MdHomeFilled/>,
    },
    {
      id:2,
      name:"Shorts",
      icon:<SiYoutubeshorts/>,
    },
    {
      id:3,
      name:"Subscription",
      icon:<MdOutlineSubscriptions/>,
    },
    
  ];
  const sidebarItems2 = [
    {
      id:1,
      name:"Your Channel",
      icon:<CgProfile/>,
    },
    {
      id:2,
      name:"History",
      icon:<MdHistory/>,
    },
    {
      id:3,
      name:"Playlist",
      icon:< MdOutlinePlaylistPlay/>,
    },
    {
      id:4,
      name:"Your Videos",
      icon:<MdOutlineVideoLibrary/>,
    },
    {
      id:5,
      name:"Watch Later",
      icon:< IoMdTime/>,
    },
    {
      id:6,
      name:"Liked videos",
      icon:<AiOutlineLike />,
    },
    
  ];
  const sidebarItems3 = [
    {
      id:1,
      name:"Trending",
      icon:<MdEnergySavingsLeaf/>,
    },
    {
      id:2,
      name:"shopping",
      icon:<LuShoppingBag/>,
    },
    {
      id:3,
      name:"Music",
      icon:<IoMdMusicalNote />,
    },
    {
      id:4,
      name:"Films",
      icon:<PiFilmSlateBold/>,
    },
    {
      id:5,
      name:"Live",
      icon:<PiBroadcastFill/>,
    },
    {
      id:6,
      name:"Gaming",
      icon:<IoLogoGameControllerB/>,
    },
    {
      id:7,
      name:"News",
      icon:<IoNewspaper />,
    },
    {
      id:8,
      name:"Sport",
      icon:<CiTrophy/>,
    },
    {
      id:9,
      name:"Courses",
      icon:<BsLightbulb />,
    },
    {
      id:10,
      name:"Fashion & Design",
      icon:<GiHanger/>,
    },
    {
      id:11,
      name:"Podcasts",
      icon:<SiPodcastindex />,
    },
    
  ];
  const sidebarItems4 =[
    {
      id:1,
      name:"YouTube Premium",
      icon:<img src={YouTube} alt="YouTube Premium" className="w-6 h-6" />,
    },
    {
      id:2,
      name:"YouTube Studio",
      icon:<img src={Studio} alt="YouTube Studio" className="w-6 h-6" />,
    },
    {
      id:3,
      name:"YouTube Music",
      icon:<img src={Music} alt="YouTube Music" className="w-6 h-6" />,
    },
    {
      id:4,
      name:"YouTube Kids",
      icon:<img src={Kids} alt="YouTube Kids" className="w-6 h-6" />,
    },
    
  ];
  return (
   <div className='px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16 hide-scroll-bar'>
    <div className=' space-y-3 items-center'>
      {sidebarItems.map((item, index) => {
        return (
          <div key={String(item.icon) + "__" + String(index)} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
            <div className='text-xl cursor-pointer'>
             {item.icon}
            </div>
            <span className='cursor-pointer'>{item.name}</span>
          </div>
        );
      })}
    </div>
    <br/>
    <hr/>
    <div className='mt-3 space-y-3 items-center'>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <h1>
          You
        </h1>
        <FaChevronRight />
        
      </div>
      {sidebarItems2.map((item, index) => {
        return (
          <div key={String(item.icon) + "__" + String(index)} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
            <div className='text-xl cursor-pointer'>
             {item.icon}
            </div>
            <span className='cursor-pointer'>{item.name}</span>
          </div>
        );
      })}
    </div>
    <br/>
    <hr/>
    <div className='mt-3 space-y-3 items-center'>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <h1 className='font-bold'>
          Explore
        </h1>
        
        
      </div>
      {sidebarItems3.map((item, index) => {
        return (
          <div key={String(item.icon) + "__" + String(index)} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
            <div className='text-xl cursor-pointer'>
             {item.icon}
            </div>
            <span className='cursor-pointer'>{item.name}</span>
          </div>
        );
      })}
    </div>
    <br/>
    <hr/>
    <div className='mt-3 space-y-3 items-center'>
      <div className='flex items-center space-x-2 cursor-pointer'>
        <h1 className='font-bold'>
          More from YouTube
        </h1>
        
        
      </div>
      {sidebarItems4.map((item, index) => {
        return (
          <div key={String(item.icon) + "__" + String(index)} className='flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1'>
            <div className='text-xl cursor-pointer'>
             {item.icon}
            </div>
            <span className='cursor-pointer'>{item.name}</span>
          </div>
        );
      })}
    </div>
    <hr/>
    <span className='text-xs font-semibold text-gray-400'>
      About Press Copyright
      <br/>
      Contact usbCreators
      <br/>
      Advertise Developers
      <br/>
      <br/>
      <p>
        Terms Privacy Policy & Safety <br/> How YouTube works <br/> Test new features

      </p>
    </span>
    <br/>
    <p className='text-xs text-gray-800 mt-1'>
     
© 2025 Coder With Dron
    </p>
    
    </div>
    
  )
};

export default Sidebar;
