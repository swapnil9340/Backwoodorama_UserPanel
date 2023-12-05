import useStyles from "../../../../Style";
import { useLocation } from "react-router-dom";
import SearchBar from 'material-ui-search-bar';
import React from "react";
import Axios from "axios";
import Dispensoriescart from './Dispensoriescart'
import { DespensioriesItem } from '../../../../Api/Api';
import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"
import Createcontext from "../../../../Hooks/Context"
const Weed_Dispansires = () => {
    const classes = useStyles()
    const [Store, SetStore] = React.useState([])
    const [Search, SetSearch] = React.useState([])
    const [searchtext, setsearchtext] = React.useState("")
    const { state } = React.useContext(Createcontext)

    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str
    }
    React.useEffect(() => {

        if (searchtext !== "") {
            const getData = setTimeout(() => {
                const json = {
                    "store": searchtext,
                    "City": state.City,
                    "Country": state.Country?.replace(/-/g, " "),
                    "State": state.State
                }
                Axios.post(`https://api.cannabaze.com/UserPanel/FilterDispensaries/`,
                    json
                )
                    .then(function (response) {
                        SetStore(response?.data);

                    })
                    .catch(function (error) {
                        console.trace(error);
                        SetStore([]);
                    });
            }, 1000)
            return () => clearTimeout(getData)
        } else {
            if (state.City !== "") {
                const object = { City: state.City.replace(/-/g, " ") }
                DespensioriesItem(object).then((res) => {
                    if (res.length !== 0) {
                        SetStore(res)

                    }
                    else {
                        const object = { State: state.State.replace(/-/g, " ") }
                        DespensioriesItem(object).then((res) => {
                            if (res.length !== 0) {
                                SetStore(res)

                            }
                            else {
                                const object = { Country: state.Country.replace(/-/g, " ") }
                                DespensioriesItem(object).then((res) => {
                                    SetStore(res)

                                })
                            }
                        })
                    }

                })
            }
            else {
                if (state.State !== "") {
                    const object = { State: state.State.replace(/-/g, " ") }
                    DespensioriesItem(object).then((res) => {
                        if (res.length !== 0) {
                            SetStore(res)

                        }
                        else {
                            const object = { Country: state.Country.replace(/-/g, " ") }
                            DespensioriesItem(object).then((res) => {
                                SetStore(res)

                            })
                        }
                    })
                }
                else {
                    if (state.Country !== "") {
                        const object = { Country: state.Country.replace(/-/g, " ") }
                        DespensioriesItem(object).then((res) => {
                            SetStore(res)

                        })
                    }
                }
            }


        }
    }, [searchtext, state])

    return (
        <React.Fragment>
            <DispensariesSco location={useLocation().pathname}></DispensariesSco>
            <div className="">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        {/* <SearchBar onCancelSearch={() => setsearchtext('')} onChange={(e) => setsearchtext(e)} style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search dispensaries address" />
                                        {
                                            Search?.map((data) => {
                                                return (
                                                    <ul>
                                                        <li>{data.Store_Name}</li>
                                                    </ul>
                                                )
                                            })
                                        } */}
                                        {/* <div class="input-group"> */}
                                            <div class="form-outline" data-mdb-input-init>
                                                <input  type="search" id="form1" class="form-control" />
                                               
                                            </div>
                                        {/* </div> */}
                                    </div>
                                </div>
                                <div className='col-12 dispensoriesOpenResultHeadingss py-2'>
                                    <span className='dispensories_result_head'>Showing result</span>
                                    <span className='dispensories_result_head'>{Store?.length}</span>
                                </div>
                            </div>
                        </div>


                        {Store?.map((ele, index) => {

                            return (
                                <Dispensoriescart index={index} ele={ele} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires