import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import useStyles from "../../../../Style"
const RelatedReview = () => {
    const classes=useStyles()
    const RelatedReview = [
        {
            imgs: "/image/flower.png", head: "Mr Nice guys", r_date: "2 year ago", rate: "4.3",
            review: "Good peeps. Happy vibes. Smart pharmacists. My crew!",
            footer_h1: "Help", footer_h2: "Report"
        },
        {
            imgs: "/image/glass.png", head: "Mr Nice guys", r_date: "2 year ago", rate: "4.3",
            review: "Good peeps. Happy vibes. Smart pharmacists. My crew!",
            footer_h1: "Help", footer_h2: "Report"
        }]
    return (
        <>
            <div className="row center">
                {RelatedReview.map((ele, index) => {
                    return (
                        <div className=" col-sm-8 col-10 border related_review_container mt-4" key={index}>
                            <div className="row">
                                <div className="col-3 col-sm-2 related_img_container">
                                    <div className="row">
                                        <div className="col-12 related_review_image">
                                            <LazyLoadImage className='realted_review_images' src={ele.imgs} />

                                        </div>

                                    </div>
                                </div>
                                <div className="col-9 col-sm-10 related_review_content">
                                    <div className="row">
                                        <div className="col-12 RelatedReview_TextCol_height fontStyle related_review_heading">
                                            <p>{ele.head}</p>

                                        </div>
                                        <div className='col-12 RelatedReview_TextCol_height related_review_paragraph'>
                                            <p>{ele.r_date}</p>
                                        </div>
                                        <div className='col-12  related_review_rate_star_flex RelatedReview_TextCol_height related_review_paragraph'>
                                            <p>{ele.rate}</p><span><AiFillStar className={classes.disp_star_color}/></span>
                                            
                                        </div>
                                        <div className='col-12 RelatedReview_TextCol_height related_review_Comment'>
                                           <p>{ele.review}</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='row border '>
                                <div className='offset-sm-2  col-sm-10 offset-2 col-10 related_review_footer '>
                                    <div className='row'>
                                        <div className='col-3 col-sm-3 col-lg-1 my-2 related_review_footer_paragraph'>
                                            <p>{ele.footer_h1}</p>

                                        </div>
                                        <div className='col-3 col-sm-3 col-lg-1 my-2 related_review_footer_paragraph'>
                                            <p>{ele.footer_h2}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    )
                })}


            </div>
        </>
    )
}
export default RelatedReview