import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io5"
import { SlAnchor } from "react-icons/sl"
import { footerLinks } from '../Data/Data';

const Footer = () => {
    return (
        <div className="mt-20 pb-5 flex gap-5 justify-around">
            <div className="w-1/4 flex flex-col gap-4">
                <div className="flex gap-1 items-center text-bright-sun-400">
                    <SlAnchor className="h-6 w-6" size={40} />
                    <div className="text-xl font-semibold">JobSeek</div>
                </div>
                <div className="text-sm text-mine-shaft-300">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>
                <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 
                    [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-600">
                    <div><FaFacebookF /></div>
                    <div><FaLinkedin /></div>
                    <div><IoLogoYoutube /></div>
                </div>
            </div>
            {
                footerLinks.map((data, index) => <div key={index}>
                    <div className="text-lg font-semibold mb-4 text-bright-sun-400">{data.title}</div>
                    {
                        data.links.map((link, index) => <div key={index} className=" text-mine-shaft-300
                     text-sm hover:text-bright-sun-400 cursor-pointer mb-1 hover:translate-x-2 
                     transition duration-300 ease-in-out">
                            {link}
                        </div>)
                    }
                </div>)
            }

        </div>
    )
}

export default Footer