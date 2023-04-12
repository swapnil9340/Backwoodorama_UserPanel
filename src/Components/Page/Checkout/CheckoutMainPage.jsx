import DeliveryOption from "./DeliveryOption"
import DeliveryInformation from "./DeliveryInformation"
import Payment from "./Payment"
import React from "react"
import AddToCartReview from "../Product/AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../Product/AddToCartComponent/AddToCartSummary"
const CheckOutMainPage = () => {
    const [ShowData, SetShowData] = React.useState(false)
    const [ShowDeliveryInformation, SetShowDeliveryInformation] = React.useState(false)
    return (
        <>
            <div className="container">
                <div className="row center">
                    <div className="col-md-8 col-lg-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-12">
                                <DeliveryOption SetShowData={SetShowData} />

                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {ShowData === true && <DeliveryInformation SetShowDeliveryInformation={SetShowDeliveryInformation} />
                                }
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {ShowDeliveryInformation === true && <Payment />}
                            </div>

                        </div>
                        <div className="row checkout_main_page_addtocart_margin">
                            <div className="col-lg-12 mx-auto checkout_main_page_addtocart_review fontStyle font_size_paragraph">
                                <p>Review</p>
                          <AddToCartReview/>
                            </div>

                        </div>

                    </div>
                    <div className="col-md-8 col-lg-4 col-sm-12 col-12  checkout_main_page_summary">
                        <div className="row ">
                            <div className="col-lg-12  ">                         
                                      <AddToCartSummary/>                  

                            </div>

                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}
export default CheckOutMainPage