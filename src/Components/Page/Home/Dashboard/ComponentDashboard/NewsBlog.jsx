
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';
import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
const NewsBlog = () => {
    const [News, SetNews] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://api.cannabaze.com/UserPanel/Get-News/");
            const data = await res.json();
            SetNews(data)
          

        }
        getApi()

    }, [])
  
    return (
        <React.Fragment>
            <div className="px-sm-0 px-3">
                   <div className="d-flex align-items-center justify-content-between">
                      <h3 className="section_main_title">Blogs</h3>
                      <Link to={'/cannabis-news'}>
                        <span className="viewallbtn">View All <FaArrowRight   /></span>
                      </Link>
                    </div>
                    <div className="blogs_card_slider">
                        <ScrollContainer className="ScrollContainerRelative">
                           
                                {News?.map((ele, index) => {
                                    return (
                                        <Link to={`/cannabis-news/${ele.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${ele.id}`} key={index}> 
                                            <div className="new_blog_card">
                                                <div className="new_blog_card_img">
                                                    <LazyLoadImage 
                                                        onError={event => {
                                                            event.target.src = "/image/blog.jpg"
                                                            event.onerror = null
                                                        }}
                                                    src={`${ele.Image}`} alt={ele.Title} style={{ pointerEvents: "none" }} />
                                                </div>
                                                <div className="new_blog_card_text">  
                                                    <span className="fontStyle latest_font_size text-capitalize">
                                                        {ele.Title}
                                                    </span>
                                                  
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                          
                        </ScrollContainer>
                    </div>
               
            </div >
        </React.Fragment>
    )
}
export default NewsBlog