import React from "react"
import { AiOutlineLeft } from "react-icons/ai"
import SearchBar from 'material-ui-search-bar';
import AllOrder from "./MyOrderComponent/AllOrder";
import useStyles from "../../../Style";
import { IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetCancelOrder, PendingOrder,Cancel, order, GetDeliveredOrder } from "../MyOrder/MyorderApi";
import { HiArrowsUpDown } from "react-icons/hi2";
import axios from "axios"
import Cookies from 'universal-cookie';
const MyOrder = () => {
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const [Getsearch, SetSearch] = React.useState("")
    const navigate = useNavigate()
    const classes = useStyles()
    const [AllOrder_data, SetAllOrder_data] = React.useState([])
    const [ordertype, Setordertype] = React.useState('')
    const [GetFilter, SetFilter] = React.useState('')
    const [loading, SetLoading] = React.useState(false)
    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
        SetLoading(true)
        if (GetFilter === "") {
            order().then((res) => {
                SetFilter("All Order")
                SetAllOrder_data(res?.data?.reverse())
                SetLoading(false)
            }).catch()
        }
    }, [])
    const Swal = require('sweetalert2')
    function CencelOrder(id) {
       
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#31B655",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    SetLoading(true)
    Cancel(id).then((res) => {
           
        PendingOrder().then((res) => {
            SetAllOrder_data(res.data)
            SetLoading(false)
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
        }).catch((error) => {
            console.log(error)
            SetLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        })

       



    }).catch(SetLoading(false))
    SetLoading(false)
   
  }
});
      
     }
    React.useEffect(() => {
        const getData = setTimeout(() => {
            Getsearch !== "" && axios.post(`https://api.cannabaze.com/UserPanel/OrderSearch/`,
                {
                    search: Getsearch
                },
                {
                    headers: { Authorization: `Bearer ${token_data}` }
                },
            )
                .then((response) => {
                   
                });
        }, 2000)
        return () => clearTimeout(getData)
    }, [Getsearch])

    function filter(e) {
        SetLoading(true)
        SetFilter(e.target.value)
        Setordertype(e.target.value)
        if (e.target.value === "All Order") {
            order().then((res) => {
                SetAllOrder_data(res?.data?.reverse())
                SetLoading(false)
            }).catch()
        }
        else if (e.target.value === "Pending Order") {
            PendingOrder().then((res) => {
                SetAllOrder_data(res.data)
                SetLoading(false)
            }).catch((error) => {
                console.log(error)
                SetLoading(false)
            })
        }
        else if (e.target.value === "Delivered Order") {
            GetDeliveredOrder().then((res) => {
                SetAllOrder_data(res.data)
                SetLoading(false)
            }).catch((error) => {
                console.log(error)
                SetLoading(false)
            })
        }

        else if (e.target.value === "Cancelled Order") {
            GetCancelOrder().then((res) => {
                SetAllOrder_data(res.data)
                SetLoading(false)
            }).catch((error) => {
                console.log(error)
                SetLoading(false)
            })
        }
        else {
            SetLoading(false)
            SetAllOrder_data([])
        }
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row px-2 center">
                    <div className="col-10 myOrder_columns px-0">
                        <h1 className="myorderHeadings">
                            <IconButton >
                                <AiOutlineLeft onClick={() => navigate(-1)} className="myOrderSpanIcons" size={20} color="#000000" style={{ marginLeft: "-6px" }} /></IconButton>
                            <span onClick={(() => navigate('/'))} className="My_order_span_name">Back</span>
                        </h1>
                    </div>
                    <div className="col-lg-10   searchBar_container  px-0">
                        <section className="MyOrder_searchBar center">
                            <span className="yourOrder_search">{GetFilter}</span>
                            {/* <div className="MyOrderSearchBar_container px-0"> */}
                            {/* <SearchBar className={`${classes.MyOrderSearchBar}`} style={{ background: "#FFFFF", border: "1px solid #CACACA" }} width={"100%"} placeholder="Search by customer, product, order id" /> */}
                            {/* </div> */}
                        </section>
                    </div>
                    <div className="col-lg-10 d-flex mt-4 " style={{ padding: "0" }}>
                        <div className="col-8 col-lg-6">
                            <SearchBar onChange={(e) => SetSearch(e)} className={`${classes.MyOrderSearchBar}`} style={{ background: "#FFFFF", border: "1px solid #CACACA" }} width={"100%"} placeholder="Search by customer, product, order id" />
                        </div>
                        <div className="col-4 col-lg-6 OrderSearchFiter">
                            <TextField
                                default={'All Order'}
                                value={GetFilter}
                                size="small"
                                onChange={filter}
                                name="cls"
                                select
                                sx={{
                                    '.MuiSvgIcon-root-393': {
                                        visibility: 'hidden'
                                    }
                                }}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.texttoselect,
                                    },
                                    renderValue: (option) => option,
                                }}
                                margin="normal"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start"><HiArrowsUpDown color="#31B665" /></InputAdornment>
                                    )
                                }}
                                className={classes.texttoselect}
                            >
                                <MenuItem value={"All Order"}> All Order</MenuItem>
                                <MenuItem value={"Pending Order"}>Pending Order</MenuItem>
                                <MenuItem value={"Shipped Order"}>Shipped Order</MenuItem>
                                <MenuItem value={"Delivered Order"}>Delivered Order</MenuItem>
                                <MenuItem value={"Cancelled Order"} >Cancelled Order</MenuItem>
                            </TextField>
                        </div>

                    </div>


                    <div className="Order_Text col-10 mt-4">
                        <div className=" center mt-5" >
                            <p style={{ color: "#707070" }}>
                                Welcome to your personalized order hub! Easily track and manage yourpurchases with the convenience of organized sections. Explore the status of your orders under the following categories
                            </p>

                        </div>
                        <div className="mt-3">
                            <p style={{ color: "black" }}>

                                Keep tabs on every purchase journey seamlessly.

                            </p>

                        </div>
                    </div>

                    { 
                       
                        Boolean(AllOrder_data[0]) ?  <AllOrder AllOrder_data={AllOrder_data} loading={loading} CencelOrder={CencelOrder} ordertype={ordertype} />:
                        <div className="col-10 NODataInOrderPage center mt-3">
                        <div className="col-8 nodataAlie">
                            <p className="nodatainOderText">{GetFilter}</p>
                            <p className="nodatainOderTextp">
                                No orders to display at the moment. Start shopping to see your order history here!
                            </p>
                            <div className="col-4 nodataAlie mt-5">
                                <button onClick={()=>navigate("/")} className="noorderbtn"> Shop Now </button>
                            </div>
                        </div>

                        </div>
                    }



                </div>
            </div>

        </React.Fragment>
    )
}
export default MyOrder