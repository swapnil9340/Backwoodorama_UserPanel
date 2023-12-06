import { MdShare } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconButton from "@mui/material/IconButton";
import { RWebShare } from "react-web-share";
import './RelatedVerifyBrandBanner.css';
import { useState } from "react";
import React from "react";

const RelatedVerifyBanner = ({ BrandDetails }) => {
    const [readmore, setreadmore] = useState(false)
  
    const handleContainerClick = (e) => {
        if (e.target.tagName === 'SPAN') {
            setreadmore(!readmore)
        }
    };

    return (
            <div className="brandProfileBanner row center">

                <div className={"relatedVerifyBrand_Banner"}>

                    <div className="relatedVerifyBrand_icons">
                      <div className="shareiconcontainer ">
                        <IconButton aria-label="share icons">
                            <RWebShare
                                data={{ url: window.location.href }}
                                sites={["facebook", "twitter", "whatsapp", "telegram", "linkedin", 'mail', 'copy']}
                                onClick={() => console.info("share successful!")}
                                color="#31B665" >
                                <MdShare color="#949494" size={20} />
                            </RWebShare>
                        </IconButton>
                      </div>
                    </div>
                    <div className="related_verifyBrandBanner_maincol">
                        <div className="RelatedVerifyBrandBanner_image_box">
                            <div className="realtedVerifyBanner_image_inner_container">
                                <LazyLoadImage className="related_verify_banner_img" src={BrandDetails.Brand_Logo} alt="Brand_Logo image not available" />
                            </div>
                        </div>
                        <div className="RelatedVerifyBanner_content_box">

                            <h1 className="section_main_title">{BrandDetails.name}</h1>

                            <div className={readmore ? "related_verify_paragraph" : " brandMoreLess"}>

                                <div id="html"
                                    onClick={handleContainerClick}
                                    dangerouslySetInnerHTML=
                                    {{
                                        __html: readmore ? BrandDetails.Brand_description +
                                            `<span id="band_shlebtn" class="band_shlebtn">Read less</span>` :
                                            BrandDetails.Brand_description.split('</p>')[0] + '<span id="band_shlebtn" class="band_shlebtn">Read more</span>'
                                    }} />

                            </div>

                        </div>
                    </div>


                </div>
            </div>
    )
}
export default RelatedVerifyBanner