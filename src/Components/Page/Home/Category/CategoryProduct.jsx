import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const arr = [{ img_url: "./image/flower.png", type: "flower" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "CBD" }, { img_url: "./image/flower.png", type: "Wap Card" }
        , { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }, { img_url: "./image/flower.png", type: "Edible" }
    ]
    return (
        <>

            <div className='container-fluid category_container'>
                <p>Shop by  category</p>
                <div className='catgory_wraper'>

                    <Slider {...settings}>
                        {arr.map((ele, index) => {
                            return (
                                <div className='cat_main_div'>
                                    <div className='image_Div'>

                                        <img src={ele.img_url} alt="flower_img" />
                                    </div>
                                    <h6>{ele.type}</h6>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </>
    )
}
export default CategoryProduct





