 import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaRegEnvelopeOpen } from 'react-icons/fa'
import creditcard from "../../../assets/images/creditcard-logo.png"
const Footer = () => {
  return (
    <footer className='pt-16 bg-[#202020]'>
      <div className='w-[90%] lg:w-[86%] m-auto overflow-hidden grid lg:grid-cols-4 grid-rows gap-8'>
       <div className='p-2 overflow-hidden'>
        <h3 className='text-white text-base font-bold uppercase tracking-wider' data-aos="fade-right">Contact Info</h3>
        <div className='flex flex-col items-start justify-start gap-2 mt-8'>
           <div className='flex items-center justify-start gap-6' data-aos="fade-right">
            <span className='text-[#8aa5e8] capitalize'>london</span>
            <div className='flex items-center gap-2'>
             <BsFillTelephoneFill className='text-white'/>
             <span className='text-white'>+6-345-3456-233</span>
            </div>
           </div>
           <div className='flex items-center justify-start gap-6' data-aos="fade-right">
            <span className='text-[#8aa5e8] capitalize'>hawaii</span>
            <div className='flex items-center gap-2'>
             <BsFillTelephoneFill className='text-white'/>
             <span className='text-white'>+1-345-33454-4</span>
            </div>
           </div>
           <div className='flex items-center justify-start gap-6' data-aos="fade-right">
            <span className='text-[#8aa5e8] capitalize'>Greece</span>
            <div className='flex items-center gap-2'>
             <BsFillTelephoneFill className='text-white'/>
             <span className='text-white'>+34-8757-4556</span>
            </div>
           </div>
           <div className='flex items-center gap-3 my-5' data-aos="fade-right">
            <FaRegEnvelopeOpen className='text-white'/>
            <span className='text-white'>Ask@traveltourtheme.com</span>
           </div>
           <p className='text-[#ABABAB] text-capitalize' data-aos="fade-right">© 2025 travel tour <br />
             all rights reserved.</p>
        </div>
       </div>
       <div className='p-2 overflow-hidden'>
        <h3 className='text-white text-base font-bold uppercase tracking-wider' data-aos="fade-right">About Us</h3>
          <ul className='flex flex-col items-start w-full mt-2'>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-right"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-right"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-right"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-right"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
          </ul>
       </div>
        <div className='p-2 overflow-hidden'>
        <h3 className='text-white text-base font-bold uppercase tracking-wider' data-aos="fade-left">About Us</h3>
          <ul className='flex flex-col items-start w-full mt-2'>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-left"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-left"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
            <li className='border-b border-b-gray-600 py-3 mt-1 w-full' data-aos="fade-left"><a href="#" className='text-white capitalize text-sm'>Our Story</a></li>
          </ul>
       </div>
       <div className='p-2 overflow-hidden'>
        <h3 className='text-white text-base font-bold uppercase tracking-wider' data-aos="fade-left">Pay Safely With Us</h3>
        <div className='flex flex-col items-start justify-start mt-6'>
          <span className='text-white pr-7' data-aos="fade-left">The payment is encrypted and transmitted securely with an SSL protocol.</span>
          <img src={creditcard} alt="" className='w-full h-full mt-3' data-aos="fade-left"/>
        </div>
       </div>
      </div>
      <div className='bg-[#181818] py-11 mt-20 overflow-hidden'>
        <p className='uppercase lg:text-lg text-sm lg:px-0 px-12 text-center text-gray-500 leading-relaxed' data-aos="fade-up">Copyright 2025 GoodLayers, All Right Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
