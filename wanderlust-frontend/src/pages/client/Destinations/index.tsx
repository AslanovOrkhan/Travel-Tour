import React from 'react'
import TitleBanner from '../../../components/TitleBanner'
import Destinationscard from '../../../components/DestinationsCard'

const Destinations = () => {
  return (
    <>
    <TitleBanner title='destinations'/>
     <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:w-[85%] w-[95%] py-16 mx-auto'>
        <Destinationscard/>
        <Destinationscard/>
        <Destinationscard/>
        <Destinationscard/>
        <Destinationscard/>
        <Destinationscard/>
     </section>
    </>
  )
}

export default Destinations
