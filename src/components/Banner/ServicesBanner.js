import React, {Component} from 'react';
import ServicesBannerItems from '../Banner/ServicesBannerItems';
import { translate } from "react-translate";

class ServiceBanner extends Component {
    render(){

        let { t , ClassC, Simage} = this.props;

        return(
            <section className={`servicesInt text-center ${ClassC}`}>
                <div className="container">
                    <ServicesBannerItems 
                        
                        Title={t(this.props.Title)}
                        TitleN={t(this.props.TitleN)}
                        TitleP={t(this.props.TitleP)}
                        
                    />
                    <img src={require ("../../img/sliderImg/" + Simage).default} alt=""/>
                </div>
            </section>
        )
    }
}

export default translate('ServiceBannerInt')(ServiceBanner);