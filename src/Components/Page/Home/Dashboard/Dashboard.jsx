import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import DispensoriesAddress from "../../Dispansires/DispansiresComponent/DispensoriesAddress";
import LatestServices from "./ComponentDashboard/LatestServices";
import WeedProduct from "./ComponentDashboard/WeedProduct";
import CommunityType from "./ComponentDashboard/CommunityType";
import Footer from "../../../Component/Footer/Footer";
import HomePageBanner from "./ComponentDashboard/HomePageBanner"
import { useNavigate } from "react-router-dom";
import React from "react";
export default function Dashboard() {
    const Navigate =  useNavigate()
    function ShowCategoryProduct (id ,name) {
        
        Navigate(`/CategoryProduct/${name}`, { state: {  id  } });
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("http://52.3.255.128:8000/UserPanel/Get-Categories/");
            const data = await apidata.json()
            SetCategory(data)
        }
        fetchData()

    }, [])
    return (
        <div className="    ">
             <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
            <DispensoriesAddress></DispensoriesAddress>
            <div  className="col-12 mt-5" >
                <Map height={"300px"}   ></Map>
            </div>
             <WeedProduct></WeedProduct>
            <LatestServices></LatestServices>
            
            <CommunityType></CommunityType> 
            <Footer></Footer>
        </div>
    )
}