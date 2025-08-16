import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch , IoMdNotificationsOutline } from "react-icons/io";
import { CiMail ,CiUser,CiCircleMore  } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter=Inter({subsets:["latin"]})

interface TwitterSidebarButton{
  title:string;
  icon: React.ReactNode;
}

const sidebarMeanuItems: TwitterSidebarButton[] = [
  {
    title:"Home",
    icon:<GoHomeFill  />
  },
  {
    title:"Explore",
    icon:<IoIosSearch  />
  },
  {
    title:"Notifications",
    icon:<IoMdNotificationsOutline />
  },
    {
    title:"Messages",
    icon:<CiMail />
  },
      {
    title:"Communities",
    icon:<FaUserGroup />
  },
      {
    title:"Premium",
    icon:<BsTwitterX />
  },
      {
    title:"Verified Orgs",
    icon:<CiUser />
  },
      {
    title:"Profile",
    icon:<CiUser />
  },
      {
    title:"More",
    icon:<CiCircleMore />
  },

]

export default function Home() {
  return (
    <div className={inter.className} >
      <div className="grid grid-cols-12  h-screen w-screen px-9" >
        <div className=" col-span-3  ml-24 pt-1 pr-8">
          <div className="text-[28px] h-fit w-fit hover:bg-slate-900 rounded-full p-2 cursor-pointer transition-all  ">
            <BsTwitterX />
          </div>
          <div className="mt-2  ">
            <ul>
              {sidebarMeanuItems.map((item)=>(
                <li className="flex justify-start gap-3 p-2 mt-[4px] w-fit hover:bg-slate-900 rounded-full cursor-pointer transition-all" key={item.title}>
                  <span className="text-3xl ">{item.icon}</span>
                  <span className="px-2 text-xl ">{item.title}</span>
                </li>
              ))}
            </ul> 
            <div className="mt-4">
              <button className="bg-white font-semibold text-black w-full rounded-full py-2">Post</button>
            </div>   
          </div>
        </div>
        <div className=" border-r-1 border-l-1 border-gray-700  col-span-5">
          <FeedCard/>
          <FeedCard/>  
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          </div>
        <div className="col-span-4"></div>

      </div>

    </div>
  );
}
