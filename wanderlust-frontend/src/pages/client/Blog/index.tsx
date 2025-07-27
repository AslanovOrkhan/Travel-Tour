import React from 'react'
import TitleBanner from '../../../components/TitleBanner'
import Blogcard from '../../../components/BlogCard'

const Blog = () => {
  return (
    <>
    <TitleBanner title="Blog Page"/>
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-3 lg:w-[85%] w-[95%] mx-auto my-16'>
     <Blogcard/>
     <Blogcard/>
     <Blogcard/>
     <Blogcard/>
     <Blogcard/>
     <Blogcard/>
     <Blogcard/>

    </div>
    </>
  )
}

export default Blog
