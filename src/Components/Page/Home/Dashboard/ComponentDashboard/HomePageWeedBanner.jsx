import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HomePageBannerSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/HomePageBannerSkeleton';
import Axios from "axios";
import { Link } from 'react-router-dom';
const HomePageWeedBanner=()=>{
    const [Skeleton , SetSkeleton]= React.useState(true)
    const [data,setdata] = React.useState([]) 
   
   
    // const HomePageWeedBanner=[{imgUrl:"./image/homePageBanner.jpg"},{imgUrl:"./image/homePageBanner.jpg"}]
    React.useEffect(() => {
        Axios("https://api.cannabaze.com/UserPanel/Get-PromotionalBanners/ ")
        .then((response)=>{
            setdata(response?.data)
           
            SetSkeleton(false)
        })
        .catch((error)=>{
        })
    }, [])



    return(
        <div className='homepagebanner2 '>
         { !Skeleton   ?
         <React.Fragment>
            <div className='destop_image'>

           
           <Swiper loop={true} autoplay={{
          delay: 2500,
        
          disableOnInteraction: false,
        }}  modules={[Autoplay]}>
            {data?.map((ele, index) => {
                return (
                    <SwiperSlide key={index}>
              
               <div   className='col-12 homePageBanner_container' >
               <a href={ ele.Link !== null ? ele.Link : "#" } target="_blank">
                        <LazyLoadImage 
                        
                        onError={event => {
                            event.target.src = "/image/VANNER_2.png"
                            event.onerror = null
                        }}
                        width="100" height="auto"
                        src={`${ele?.Banner}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
                        </a>
                    </div>
          
                    </SwiperSlide>
                )
            })}
           </Swiper>
           </div>
           <div className="mobile_imges">
              <Swiper loop={true}  autoplay={{
          delay: 2500,
          
          disableOnInteraction: false,
        }}  modules={[Autoplay]}>
            {data?.map((ele, index) => {
                return (
                    <SwiperSlide key={index}>
                    <div className='col-12 homePageBanner_container'>
                        <a href={ ele.Link !== null ? ele.Link : "#" } target="_blank">
                        <LazyLoadImage
                                  onError={event => {
                                    event.target.src = "/image/M11.jpg"
                                    event.onerror = null
                                }}
                                width="100" height="auto"
                        src={`${ele?.mobile}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
                        </a>
                    </div>
                    </SwiperSlide>
                )
            })}
           </Swiper>
           </div>
           </React.Fragment>
        :
        <HomePageBannerSkeleton></HomePageBannerSkeleton>
    }
    </div>
    )
}
export default HomePageWeedBanner