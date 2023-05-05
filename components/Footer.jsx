import Image from 'next/image';
import logo from '../public/static/large-WOMJa9L29-transformed.png'



function Footer() {
    return (
        <div className="bg-[#121212] text-white mt-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  h-60 pt-7">
                <Image src={logo} width={100} height={100} className=' ' alt='logo' unoptimized/>
                <p className='w-48'>Copyright © 2023 weka. All rights reserved. | Privacy Policy | Terms of Use | Contact Us</p>
            </div>  

        </div>
    );
}

export default Footer;