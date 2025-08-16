import Image from "next/image";
import React from "react";
import { MessageCircle, Repeat2, Heart, BarChart2, Bookmark, Share2 } from "lucide-react";

const FeedCard: React.FC = () => {
  return (
    <div className="border-b border-gray-700 p-4 hover:bg-gray-900 transition">
      <div className="grid grid-cols-12 gap-2 ">
        
        {/* Profile Image */}
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/172506050?v=4"
            alt="user-image"
            height={48}
            width={48}
            className="rounded-full"
          />
        </div>

        {/* Tweet Content */}
        <div className="col-span-11 ">
          {/* Username + handle + timestamp */}
          <div className="flex items-center space-x-2">
            <h5 className="font-bold text-white">Abhishek</h5>
            <span className="text-gray-500">@AbhishekSay · 15h</span>
          </div>

          {/* Tweet text */}
          <p className="text-white mt- text-[15px] ">
            So, it's confirmed that Indian government hired influencers to spread propaganda on Ethanol blended petrol. These influencers include Abhishek
            Malhan, Mahesh Keshwala, Arun Kushwah, RJ Naved, RJ Praveen, Neha Nagar,
            Sanjay Kathuria, Vishal Rattewal, etc.
            <br />
            <br />
            Videos in this thread.
          </p>

          {/* Footer icons */}
          <div className="flex justify-between text-gray-500 text-sm mt-3 w-[100%]">
            <div className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer">
              <MessageCircle size={18} /> <span>851</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-green-500 cursor-pointer">
              <Repeat2 size={18} /> <span>6.4K</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-pink-500 cursor-pointer">
              <Heart size={18} /> <span>34K</span>
            </div>
            <div className="flex items-center space-x-2  hover:text-blue-400 cursor-pointer">
              <BarChart2 size={18} /> <span>2.6M</span>
            </div>
            <div className="flex items-center space-x-3 ">
              <div className="hover:text-blue-400 cursor-pointer"><Bookmark size={18} /></div>
              <div className="hover:text-blue-400 cursor-pointer"><Share2 size={18} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
