import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import { translate } from "react-translate";


class BannerClients extends Component{
    render(){
    
            let { t } = this.props;

        return(
            <section className="banner_area sec_pad">             
                <div className="banner_clients_intro">
                    <div className="section_container">
                        <div className="intro">
                            <div className=" intro_content seo_banner_content">
                                <Reveal effect="fadeInUp" duration={500}>
                                    <h2>{t(this.props.title)}</h2>
                                </Reveal> 
                                <Reveal effect="fadeInUp" duration={1000}>
                                <p>{t(this.props.txt_d)}</p>
                                </Reveal>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </section>
        )
    }
}

export default translate('ClientsBanner')(BannerClients);