import React, { useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AOS from "aos";
import "aos/dist/aos.css";

function Abovenav() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
<div class="grid grid-cols-3 gap-4 py-2 justify-items-center"  data-aos="fade-down"
         data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay='1000'>
  <div>SUBSCRIDE </div>
  <div>Company Name </div>
  <div><SearchIcon/></div>
</div>  )
}

export default Abovenav