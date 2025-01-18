import { SlAnchor } from "react-icons/sl";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Avatar } from '@mantine/core';
import { Indicator } from '@mantine/core';
import NavLink from "./NavLink";
const Header = () => {
   return (
      <div className='w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center'>
         <div className='flex gap-3 items-center text-bright-sun-400'>
            <SlAnchor size={40} />
            <div className='text-2xl font-semibold'>JobSeek</div>
         </div>
         {NavLink()}
         <div className='flex gap-3 items-center'>

            <div className='flex gap-2 items-center'>
               <div>Arunalu</div>
               <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
               <IoMdSettings size={25} />
            </div>
            <div className="bg-mine-shaft-900 p-1.5 rounded-full">
               <Indicator color="brightSun" offset={5} size={9} processing>
                  <IoNotificationsOutline size={25} />
               </Indicator>
            </div>

         </div>
      </div>
   )
}

export default Header