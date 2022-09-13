import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Category() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
      <> 
      {/* First Image right side */}
      <section class="text-gray-600 body-font ">
      <div class="container px-32 py-24 mx-auto flex flex-wrap">
        
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center" data-aos="fade-right"
         data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration='650'>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-300 mb-5">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base space-x-9 tracking-wider">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
    
              {/* * TODO: need to be add href */}
             <a href='/Products'>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Learn More</button>
            </a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden" data-aos="fade-left"
         data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration='650'>
          <img alt="feature" class="object-cover object-center h-full w-full " src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
      </div>
    </section>
    
      {/* Second Image right side */}
      <section class="text-gray-600 body-font">
      <div class="container px-32 py-24 mx-auto flex flex-wrap" >
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration='650'>
          <img alt="feature" class="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1561865406-62a037159577?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va21hcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"/>
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration='650'>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-300 mb-5">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
              <p class="leading-relaxed text-base tracking-wider">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
    
              {/* * TODO: need to be add href */}
             <a href='/Products'>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Learn More</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}

export default Category