import React from 'react';
import ServicesBanner from '../components/Banner/ServicesBanner';


const ServiceSoftware = () => {
    return(
        <div className="body_wrapper">
                <ServicesBanner 
                    ClassC='service_1' 
                    Title= "TitleSoftwareDev"
                    TitleN= "TitleNSoftwareDev"
                    TitleP= "TitlePSoftwareDev"
                    Simage='slider-software.png'/>
        </div>
    )
}
export default ServiceSoftware;