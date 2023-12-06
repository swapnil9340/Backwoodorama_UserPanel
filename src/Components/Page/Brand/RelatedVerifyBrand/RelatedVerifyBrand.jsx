import RelatedVerifyBanner from "./RelatedVerifyComponent/RelatedVerifyBrandBanner"
import SearchBar from '@mkyy/mui-search-bar';

import { useParams, useLocation } from "react-router-dom";
import React from "react";
import Axios from "axios";
import useStyles from "../../../../Style";

import { BrandDetailsSeo } from "../../../Component/ScoPage/BrandsSeo";
import ProductSearchResult from "../../Product/ProductSearchResult/ProductSearchResult";
const RelatedVerifyBrand = () => {
    const classes = useStyles()
    const { pathname } = useLocation()
    let { id, Name } = useParams();
    const [BrandProduct, SetBrandProduct] = React.useState([])
    const [searchval, Setsearchval] = React.useState("")
    const [BrandDetails, GetBrandDetails] = React.useState([])
   
    React.useEffect(() => {
       if(searchval?.length !== 0){
        const getData = setTimeout(() => {
            Axios.post(`https://api.cannabaze.com/UserPanel/SearchProductbyBrand/`,{
                "brand":1,
                "search":searchval,
            }).then((response) => {
                SetBrandProduct(response.data);
          });
        }, 1000)
    
        return () => clearTimeout(getData)
       }else{
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-ProductbyBrand/${id}`,
        ).then(response => {
            SetBrandProduct(response.data)
        })
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-BrandById/${id}`,
        ).then(response => {
            GetBrandDetails(response.data[0])
        })
        window.scrollTo(0, 0) 
       }
      }, [searchval , id])
    return (
        BrandDetails.length !== 0 && <div className="container-fluid">
            <BrandDetailsSeo brandname={Name} location={pathname}></BrandDetailsSeo>
            <RelatedVerifyBanner BrandDetails={BrandDetails} />
                <div className="row  center mx-0 mt-4 mb-4">
                    <div className="col-md-3 px-0">
                        {/* <ProductFilter/> */}
                    </div>
                    <div className="col-md-9">
                        <div>  <SearchBar style={{ background: "#FFFFF", border: "1px solid #31B665" }} 
                         onCancelSearch={() => console.log('hello wolrd')}
                          value={searchval} onChange={(e)=>{Setsearchval(e)}}
                           className={classes.strainTypSearchBar} 
                           width={"100%"} placeholder="Search Menu" 
                           closeIcon={<button onClick={() => Setsearchval("")}>clear</button>}
                           />
                        </div>
                    </div>

                </div>
            <ProductSearchResult RelatedProductResult={BrandProduct} />
        </div>
    )
}
export default RelatedVerifyBrand