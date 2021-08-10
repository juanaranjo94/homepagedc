import React from 'react';
import ServicesBanner from '../components/Banner/ServicesBanner';


const ServiceTechnology = () => {
    return(
        <div className="body_wrapper">
                <ServicesBanner 
                    ClassC='service_4' 
                    Title= "TitleTechnoConsulting"
                    TitleN= "TitleNTechnoConsulting"
                    TitleP= "TitlePTechnoConsulting"
                    Simage='slider-consulting.png'/>
        </div>
    )
}
export default ServiceTechnology;