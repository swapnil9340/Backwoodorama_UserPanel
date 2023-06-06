import TextField from '@mui/material/TextField';
import useStyles from "../../../../Style"
import InputAdornment from '@material-ui/core/InputAdornment';
import { BsSearch } from "react-icons/bs"
import { IoLocationSharp } from "react-icons/io5"
import Autocomplete from '@mui/material/Autocomplete';
import Axios from "axios"
import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import { useNavigate } from 'react-router-dom';
import Createcontext from "../../../../Hooks/Context"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import CurrentLocation from './CurrentLocation';
import _ from "lodash"
import { Button, Paper } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddressSearchapi from "./AddressSearchapi"
const SearchBar = () => {
    const Navigation = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const [SearchData, SetSearchData] = React.useState([])
    const [SearchBarWidth, SetSearchBarWidth] = React.useState(window.innerWidth <= 900)
    // const [options , Setoption] = React.useState()
    //  const [defaultValue , SetdefaultValue] =  React.useState()
    const [windowSize, setWindowSize] = React.useState()
    const classes = useStyles()
    function Search(event) {
        SetSearchData([])
        Axios.post(`http://backend.sweede.net/UserPanel/Get-HomePageFilter/`,
            {

                search: event.target.value
            }
        ).then(response => {
            if (response.status === 200) {

                const o = Object?.entries(response?.data).map((data, index, value) => {
                    return (data)
                })
                const y = o?.map((data) => {
                    return data
                });


                y.map((data1) => {
                    return (
                        data1[1].map((data) => {
                            return SetSearchData(SearchData => [...SearchData, { type: data1[0], value: data.name || data.Product_Name || data.Store_Name, id: data.id, image: data?.Brand_Logo || data?.categoryImages || data?.Store_Image || data?.SubCategoryImage }]);

                        }

                        )

                    )

                })
                // SetSearchData(response?.data);
            }

            else (
                SetSearchData([])
            )

        }).catch(
            function (error) {

            })
    }
    const [open, setOpen] = React.useState(false);
    const [openLocation, setOpenLocation] = React.useState(false);
    const loading = open
    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        if (windowSize <= 900) {
            SetSearchBarWidth(true)
        }
        else {
            if (windowSize >= 900) {
                SetSearchBarWidth(false)
            }
        }
        return () => window.removeEventListener('resize', handleResize)

    }, [windowSize])



    function SearchAPi(id, type) {

        Axios.post(`http://backend.sweede.net/UserPanel/Get-ResultHomeSearchFilter/`,
            {
                id: id,
                type: type
            }
        ).then((response) => {
            if (response.data.Product) {
                const Id = response.data.Product[0].id
                Navigation(`/ProductDetail/`, { state: Id });
            }
            else if (response.data.Store) {

                Navigation(`/DispensoriesProduct/${response.data.Store[0].id}/${"Menu"}`);

            }
            else if (response.data.Brand) {
                console.log(response)
                Navigation(`/RelatedVerifyBrand/${response.data.Brand[0].id}`);

            }
            else if (response.data.Category) {
                const id = response.data.Category[0].id
                Navigation(`/CategoryProduct/${response.data.Category[0].name}`, { state: { id } });

            }
            else if (response.data.Sub_Category) {
                const Id = response.data?.Sub_Category[0]?.id
                const name = response.data?.Sub_Category[0]?.name

                Navigation(`/Product/${name}`, { state: Id });

            }

        })
    }






    return (
        <>
            <div className="col_Search">
                <div className={` nav_search_bar_div center`} style={{ display: (openLocation && SearchBarWidth) && "block" }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        // onClick={Search}
                        filterOptions={x => x}
                        onClose={() => {
                            setOpen(false);
                        }}
                        ListboxProps={{ style: { maxHeight: 500 } }}
                        componentsProps={{ popper: { style: { height: '100%', width: SearchBarWidth ? "100%" : "30%" } } }}
                        onChange={(event, value) => SearchAPi(value?.id, value?.type,)}
                        getOptionSelected={(option, value) => option.value}
                        getOptionLabel={(option) => option.value}
                        options={SearchData}
                        groupBy={(option) => option.type}
                        renderOption={(props, t) => {
                            return (
                                <div {...props} style={{ color: "black" }} >
                                    <ul className='PopperLIst'>
                                        <div>
                                            <li onClick={((e) => SearchAPi(t.id, t.type,))} key={`${t.value}`}>
                                                <img src={`http://backend.sweede.net/${t.image}`} style={{ width: "50px", height: "50px" }} alt=''></img>
                                                <span> {`${t.value}`}</span>
                                            </li>
                                        </div>


                                    </ul>
                                </div>
                            )
                        }}
                        loading={loading}
                        sx={{ width: open && SearchBarWidth ? "200%" : "100%" }}
                        renderInput={(params) => <TextField
                            {...params}
                            size="small"
                            onClick={Search}
                            onChange={Search}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    paddingRight: "10px!important",
                                },
                            }}
                            placeholder="Products Brands Retailers and more"
                            className={` SearchBar nav_search_bar_div  ${classes.SearchBar_Text}`}
                            style={{ borderRadius: (open && SearchBarWidth) ? " 16px 16px 16px 16px" : " 16px 0px 0px 16px", top: "0px", display: openLocation && SearchBarWidth ? "none" : "inline-flex", width: open && SearchBarWidth ? "100%" : "100%" }}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BsSearch color="gray" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <React.Fragment>
                                        {loading ? (
                                            <CircularProgress color="inherit" size={20} />
                                        ) : null}
                                    </React.Fragment>
                                ),
                            }}
                        />}
                    />
                    <div id="Boder_left"></div>
{/* 
                    {state.LocationData[0] &&

                        <Autocomplete
                            {...defaultProps}
                            openLocation={openLocation}
                            onOpen={() => {
                                setOpenLocation(true);
                            }}
                            onClose={() => {
                                setOpenLocation(false);
                            }}
                            autoSelect={true}
                            onChange={(e, d) => console.log(e, d)}
                            onInputChange={handleInputChange}
                            defaultValue={state.Location[0]}
                            sx={{ width: "100%" }}
                            ListboxProps={{ style: { maxHeight: 500 } }}
                            PaperComponent={({ children }) => {
                                return (
                                    <Paper>
                                        <Button
                                            color="primary"
                                            fullWidth
                                            sx={{ justifyContent: "center", pl: 2, color: "grey", height: "50px", textAlign: 'left', }}
                                            onMouseDown={() => {
                                                console.log("Add new");
                                            }}

                                            startIcon={< MyLocationIcon size={50} />}

                                        >
                                            + use my exact location
                                        </Button>
                                        {children}
                                    </Paper>
                                );
                            }}


                            componentsProps={{ popper: { style: { height: '100%', width: SearchBarWidth ? "100%" : "30%" } } }}
                            renderInput={(params) => <TextField
                                {...params}
                                // value={defaultValue.lat}
                                // onChange={((e) => f)}
                                // onClick={((e) => { dispatch({ type: 'Location', Location: e.target.value }) })}
                                style={{ borderRadius: (openLocation && SearchBarWidth) ? " 16px 16px 16px 16px" : " 0px 16px 16px 0px", top: "0px", display: open && SearchBarWidth ? "none" : "inline-flex", }}
                                size="small"
                                sx={{
                                    width: "100%", "& .MuiOutlinedInput-root": {
                                        paddingRight: "10px!important",
                                    },
                                }}

                                variant="outlined"
                                className={`sec_input_search SearchBar px-2 ${classes.SearchBar_Text}`}
                                type="text"
                                placeholder="location"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoLocationSharp color="gray" size={18} />
                                        </InputAdornment>
                                    ),
                                    // endAdornment: (
                                    //     <React.Fragment>
                                    //         {openLocation ? (
                                    //             <CircularProgress color="inherit" size={20} />
                                    //         ) : <CloseIcon onClick={(()=>{ dispatch({type:'Location', Location:"" })})} color="inherit" size={20}></CloseIcon>}
                                    //     </React.Fragment>
                                    // ),
                                }}
                            />

                            }
                        />

                    } */}
                    <AddressSearchapi
                    openLocation={openLocation}
                    SearchBarWidth={SearchBarWidth}
                    setOpenLocation={setOpenLocation}
                    open={open}
                    ></AddressSearchapi>

                </div>
            </div>

        </>
    )
}
export default SearchBar


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyC_MQE9O7OW5sM2Pvyzs5zjotWyqdshhjA




// ,key[1].map((data) => {
// return data.name || data.Product_Name
// })
// (data[1]?.map((g)=>  data[0]+(g.name || g.Product_Name)))) 
