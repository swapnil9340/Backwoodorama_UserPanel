import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import FeaturedBrandSkeleton from "../../../../Component/Skeleton/DashBoardSkeleton/FeaturedBrandSkeleton";
import { Link,  } from "react-router-dom"
const FeaturedBrand = ({ CardDataArray ,BrandSkeleton}) => {
    
    const ref = React.useRef(null);

    return (
        !BrandSkeleton  ?
        <React.Fragment>
             <div className="col-12 bestDealsCard_Heading_offers mt-5">
                    <h3 className="ellipsis dispensariesShopHeading featuredBrandHeading">Featured Brands</h3>
                   
                </div>

            <div  ref={ref}>
                <ScrollContainer className="featuredBrandScrollContainerRelative">
                    {
                        CardDataArray.map((items, index) => {
                            return (
                                <div className="col-xxl-3 col-xl-4 col-lg-3 col-sm-6 col-12 mb-4  bestDealCards" key={index}>
                                      <Link  to={`/Brand/${items.name.replace(/\s/g, '')}/${items.id}`}> 
                                    <div className="row  FeaturedBrandContainer  mx-0 my-2">
                                        <div className="col-12 FeaturedBrandImageContainer px-0">
                                            <LazyLoadImage className="FeaturedBrandImage_height" src={`https://sweede.app/${items.Brand_Logo}`} alt="image not available" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12  center">
                                            <p className="ellipsis featuredBrandTitle mx-2">{items.name}</p>
                                        </div>

                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>

            </div>
          

        </React.Fragment>
        :
        <div className="col-12 bestDealsCard_Heading_offers mt-4">
       
        <FeaturedBrandSkeleton></FeaturedBrandSkeleton>
    </div>

    )
}
export default FeaturedBrand