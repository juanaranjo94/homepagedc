import React, {Component} from 'react';
import Servicesitems from './Servicesitems';
import ServTitle from './ServTitle';
import { translate } from "react-translate";


class Services extends Component{
    render(){

        let { t } = this.props;
       
        return(
            <section className="services_area bg-white" id="servicios">
                <div className="container" >

                    <ServTitle Title={t(this.props.serv_title)} TitleP={t(this.props.serv_title2)} />

                    <div className="services_info">
                        

                        <Servicesitems 
                            url="/technology-consulting" 
                            read_more={t(this.props.read_more)} 
                            ftitle={t(this.props.serv1_t)} 
                            rowClass="row flex-row-reverse"                              
                            fimage="Icono-Consulting.png" 
                            descriptions={t(this.props.serv1_d)}/>

                        <Servicesitems 
                            url="/software-development" 
                            read_more={t(this.props.read_more)} 
                            ftitle={t(this.props.serv2_t)} 
                            rowClass="row agency_featured_item_two"                             
                            fimage="Icono-Software.png" 
                            descriptions={t(this.props.serv2_d)}/>

                        <Servicesitems 
                            url="/database-service" 
                            read_more={t(this.props.read_more)} 
                            ftitle={t(this.props.serv3_t)} 
                            rowClass="row flex-row-reverse"                             
                            fimage="Icono-Database-Services.png" 
                            descriptions={t(this.props.serv3_d)}/>

                        <Servicesitems 
                            url="/web-app-services" 
                            read_more={t(this.props.read_more)} 
                            ftitle={t(this.props.serv4_t)} 
                            rowClass="row agency_featured_item_two"                             
                            fimage="Icono-Web-and-Mobile-App.png" 
                            descriptions={t(this.props.serv4_d)}/>
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default translate('services_home')(Services);