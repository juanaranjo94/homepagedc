import React from 'react';
import ServicesBanner from '../components/Banner/ServicesBanner';


const HomeCloud = () => {
    return(
        <div className="body_wrapper">

                <ServicesBanner 
                    ClassC='service_2' 
                    Title= "TitleWebApp"
                    TitleN= "TitleNWebApp"
                    TitleP= "TitlePWebApp"
                    Simage='slider-web-app.png'/>
                    
        </div>
    )
}
export default HomeCloud;