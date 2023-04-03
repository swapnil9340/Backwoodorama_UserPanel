
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../Style"

const Flavour = () => {
    const classes = useStyles()
    const delBtn = [{ del: "Delivery Only" }, { del: "Closed Open" }, { del: "Medical and recreational" }, { del: "Licence and Information" }
        , { del: "order only delivery" }]

    return (
        <>
            <div className="container-fluid" >
                <div className="row center">
                    <div className="col-12 d-flex border flavCont p-0">
                        <div className="col-4">
                            <div className="col-12 flav_img_div">
                                <div className="col-10 flav_img_inner_div">
                                <img src="./image/logo2.png" alt="img_not_found" style={{pointerEvents: "none"}} />

                                </div>
                            </div>
                        </div>
                        <div className="col-8 p-2">
                            <div className="col-12 comm_head_prop fontStyle">
                                <p>Urban Flavours Delivery Berkeley </p>

                            </div>
                            <div className="col-12 d-flex">
                                <p>Rating</p><span className="mx-2"><AiFillStar className={classes.disPen_Icons} /></span>

                            </div>
                            <div className="col-12 ">
                                <p>Berkeley, California</p>
                            </div>
                            <div className="col-12  flav_btn">
                                {delBtn.map((ele, index) => {
                                    return (
                                        <div className="col-2 mt-2" key={index}>
                                            <button className="flavo_btns">{ele.del}</button>

                                        </div>
                                    )
                                })}                             
                            </div>
                           

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Flavour