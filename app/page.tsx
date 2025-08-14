import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12  h-screen w-screen" >
        <div className=" col-span-3">
          <BsTwitterX />
        </div>
        <div className=" border-r-1 border-l-1 border-gray-500  col-span-6"></div>
        <div className="col-span-3"></div>

      </div>

    </div>
  );
}
