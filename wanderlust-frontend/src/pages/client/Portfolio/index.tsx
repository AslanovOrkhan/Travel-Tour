import React from 'react'
import TitleBanner from '../../../components/TitleBanner'
import PortfolioCard from '../../../components/PortfolioCard'
import TourSlider from '../../../components/TourSlider'

const Portfolio = () => {
  return (
    <>
    <TitleBanner title='portfolio'/>
     <section className=' lg:w-[86%] w-[95%] my-16 mx-auto'>
             <ul className='flex items-center justify-center flex-wrap lg:gap-9 gap-5'>
                <li><span className='text-gray-700 text-xl font-bold capitalize'>all</span></li>
                <li><span className='text-gray-700 text-xl font-bold capitalize'>beach</span></li>
                <li><span className='text-gray-700 text-xl font-bold capitalize'>city</span></li>
                <li><span className='text-gray-700 text-xl font-bold capitalize'>nature</span></li>
                <li><span className='text-gray-700 text-xl font-bold capitalize'>outdoor</span></li>
            </ul>
            <div className='py-5 my-5 grid lg:grid-cols-3 grid-cols-1 gap-10'>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            <PortfolioCard/>
            </div>
       </section>
    </>
  )
}

export default Portfolio
