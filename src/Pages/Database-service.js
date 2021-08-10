import React from 'react';
import ServicesBanner from '../components/Banner/ServicesBanner';


const ServiceDatabase = () => {
    return(
        <div className="body_wrapper">
              
                <ServicesBanner 
                    ClassC='service_3' 
                    Title= "TitleData"
                    TitleN= "TitleNData"
                    TitleP= "TitlePData"
                    Simage='slider-database.png'/>

        </div>
    )
}
export default ServiceDatabase;