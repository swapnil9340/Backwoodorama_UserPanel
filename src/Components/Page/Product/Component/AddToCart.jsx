import React from "react";
import AddToCartReview from "../AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../AddToCartComponent/AddToCartSummary"
const AddToCart = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>


                    <div className="col-12 AddProductCartContainer">

<<<<<<< HEAD
                        <div className="col-8  AddProductCartContainerinner">
                            <AddToCartReview />
=======

                        <div className="col-10  AddProductCartContainerinner">
                            {LocalData?.map((ele, index) => {
                                return (
                                    <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                                        <div className="col-12  Add_prod_item_image">

                                            <div className="col-1 Add_prod_item_image_cont">
                                                <LazyLoadImage src={`http://52.3.255.128:8000//${ele.Image[0]?.image}`} alt="imag not found" />
                                            </div>
                                            <div className="col-8 Add_prod_content_cont p-2">
                                                <div className="col-12 fontStyle  add_prod_para_font">
                                                    <h5>{ele.Product_Name}  </h5>

                                                </div>

                                                <div className="col-12 fontStyle  add_prod_para_margin add_prod_cart_p">
                                                    <p>{ele.StoreName}</p>

                                                </div>
                                                <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                                    {ele?.Prices.map((ele1, index) => {
                                                        var JsonObject = JSON.parse(JSON.stringify(ele1))
                                                        var jsondata = JSON.parse(JsonObject.Price)
                                                        if (ele.Price_index?.length === 0) {
                                                            return (

                                                                <span className="add_prod_span_amount fontStyle">${jsondata[0].Price}</span>
                                                            )
                                                        }
                                                        else {
                                                            const d = jsondata?.find((PriceSelect) => {
                                                                return (PriceSelect.id === ele.Price_index[0].Item_id) 
                                                            })
                                                            return (<span className="add_prod_span_amount fontStyle">${d?.Price}</span>
                                                            )
                                                        }
                                                    })
                                                    }


                                                </div>
                                                <div className="col-12 add_prod_btn_amount">
                                                    <div className="col-10 col-lg-3 col-md-4 col-sm-4  add_to_product_btn_div d-flex">
                                                        <div className="col-4">
                                                            {/* <button className="add_prod_cart_btn" onClick={() => { Quantity(ele.Product_id) }} ><AiOutlinePlus /></button> */}
                                                            <Button className="" style={{ width: "15px" }} onClick={() => { Quantity(ele.Product_id) }} ><AiOutlinePlus /></Button>


                                                        </div>
                                                        <div className="col-2 addprod_quant">
                                                            <p>{ele.Product_Quantity}</p>
                                                        </div>
                                                        <div className="col-4">
                                                            {/* <button className="add_prod_cart_btn" > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id) }} />}</button> */}
                                                            <Button className="" style={{ width: "15px" }} > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id) }} />}</Button>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                            <div className="col-3 ">
                                                <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                                    <RiDeleteBin6Line onClick={(() => { DeleteItem(ele.Product_id) })} />
                                                </div>

                                                <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                                    {ele?.Prices.map((ele1, index) => {
                                                        var JsonObject = JSON.parse(JSON.stringify(ele1))
                                                        var jsondata = JSON.parse(JsonObject.Price)
                                                        if (ele.Price_index?.length === 0) {
                                                            return (

                                                                <div key={index} >
                                                                    <p> Amount</p>  <span className="add_prod_span_amount fontStyle Amount" >{jsondata[0].Price * ele.Product_Quantity}</span>
                                                                </div>
                                                            )
                                                        }
                                                        else {
                                                            const d = jsondata?.find((PriceSelect) => {
                                                                return (PriceSelect.id === ele.Price_index[0].Item_id) 
                                                            })
                                                            
                                                            
                                                            return (

                                                                < div key={index} >

                                                                    <p> Amount</p> <span className="add_prod_span_amount Amount fontStyle" value={d.Price * ele.Product_Quantity}>{d.Price * ele.Product_Quantity}</span>
                                                                </div>
                                                            )

                                                        }
                                                    })}





                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-3 border  p-2 Add_product_cart_right_container_summary ">
                            <div className="col-12 fontStyle AddProdCartFont_weight">
                                <h5>Order Summmary</h5>

                            </div>
                            <div className="col-12 d-flex addToCart_deliver">
                                <div className="col-6">
                                    <Box
                                        className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                                    >
                                        <LoadingButton onClick={HandleDelivery} variant="outlined">Delivery</LoadingButton>
                                    </Box>
                                </div>
                                <div className="col-6">
                                    <Box
                                        className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                                    >
                                        <LoadingButton variant="outlined">Pickup</LoadingButton>
                                    </Box>
                                </div>

                            </div>
                            <div className="col-12">
                                {OpenDelivery && (<div className="col-12 mt-4 ">

                                    <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                                        <TextField id="outlined-basic" placeholder="Enter Your Delivery" variant="outlined" fullWidth size='small' />
                                    </div>
                                    <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                                        <TextField id="outlined-basic" placeholder="Enter Your contact" variant="outlined" fullWidth size='small' />
                                    </div>
                                </div>)}

                            </div>
                            <div className="col-12 order_summary_flex mt-4">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>{Total}</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Est. excise tax</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$233</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>State tax</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$233</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Delivery free</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>free</p>
                                </div>


                            </div>
                            <div className="col-12 order_Summary_total_container">

                                <div className="col-12 order_summary_flex">
                                    <div className="col-6 fontStyle add_prod_cart_summary_p">
                                        <p>Total</p>
                                    </div>
                                    <div className="col-2 fontStyle">
                                        <p>{Total}</p>
                                    </div>

                                </div>
                                <div className="col-12 add_prod_cart_p">
                                    <p>Taxes are Shows</p>

                                </div>
                                <div className="col-6 AddProd_cart_center_btn">
                                    <Box
                                        className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                                    >
                                        {/* <Link to="/DeliveryOption"><LoadingButton variant="outlined">Checkout</LoadingButton></Link> */}
                                        <Link to="/CheckOutMainPage"><LoadingButton variant="outlined">Checkout</LoadingButton></Link>

                                    </Box>

                                </div>
                            </div>

>>>>>>> b94be9d (chnage)

                        </div>
                        <div className="col-4   p-2 Add_product_cart_right_container_summary ">
                            <AddToCartSummary />
                        </div>




                    </div>
                    <div className="col-12">


                    </div>



                </div>

            </div>

        </div >
    )
}
export default AddToCart