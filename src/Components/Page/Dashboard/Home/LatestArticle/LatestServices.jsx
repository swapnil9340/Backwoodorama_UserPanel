import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';
import styled from "styled-components";
import { useState,useEffect } from "react";
const LatestServices = () => {
    const [value,setValue]=useState([])
    useEffect(()=>{
        const getApi=async ()=>{
            const res=await fetch("http://52.3.255.128:8000/UserPanel/Get-News/");
            const data=await res.json();
            setValue(data)
            // console.log(data)

        }
        getApi()

    },[])
    const SliderLatestService = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
      `;
    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }
  
    return (
        <>
            <div className="container-fluid   mt-4">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="latest_services disp_head">
                            <p>Welcome to Backwoodaroma</p>
                            <h6 className="fontStyle common_sub_head">Check our latest article to see our inspiring content for shopping</h6>
                        </div>
                    </div>

                </div>
                <div className="row ">
                    <SliderLatestService {...settings}>
                        {value.map((ele, index) => {
                            return (
                              <div key={index}>
                                 <div className="col-12 center_latest" >
                                <div className="col-10  latest_cont" >
                                    <div className="col img_cont center_latest ">
                                        <div className="col-12  centerImg ">
                                            <img src={`http://52.3.255.128:8000/${ele.Image}`} alt="img_not_found" />

                                        </div>

                                    </div>
                                    <div className="col latest_content_div ">
                                        <div className="col-10 mt-2">
                                            <p className="fontStyle latest_font_size ">{ele.Title.slice(0,50)}</p>

                                        </div>
                                        <div className="col-10 ">
                                        <p className="fontStyle common_sub_head">{parse(ele.Description.slice(0, 100))}</p>

                                        </div>

                                    </div>




                                </div>
                               </div>
                              </div>
                            )
                        })}
                      
                    </SliderLatestService>



                </div>


            </div>
        </>
    )
}
export default LatestServices