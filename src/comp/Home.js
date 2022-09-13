import React, { useEffect } from 'react'
import Category from './Category'
import AOS from "aos";
import "aos/dist/aos.css";
const style = {
  height: "650px",
  width: "100%",
  objectFit: "cover",
}


function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
    <figure data-aos="fade-down"
         data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay='2500'
          data-aos-duration='1000'>
    <img style={style} src='https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' alt='Header-img'/>
  </figure>

  <h2 className='text-center mt-10 mb-4 text-4xl font-medium leading-tight' data-aos="fade-down">We Have Categorys</h2>
  <p className='text-center text-1xl' data-aos="fade-up">font-medium leading-tight Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  <Category/>
  <Category/>


{/* Gallary section  */}
<h2 className='text-center mt-10 mb-4 text-4xl font-medium leading-tight' data-aos="fade-down">Gallery</h2>
<section class="text-gray-600 body-font" data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration='1000'>
  <div class="container px-5 py-12 mx-auto flex flex-wrap">
    {/* <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-center">Gallery</h1>
      <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div> */}
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Home