import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal/';
import { translate } from "react-translate";


class SecBanner extends Component{
    render(){


            let { t } = this.props;

        return(
            <section className="banner_area sec_pad">
                <div className="container">
                    <div className="banner_top">                   
                        <div className="row">
                            <div className="col-md-12 text-center seo_banner_content">
                                <Reveal effect="fadeInUp" duration={500}>
                                    <h2>{t(this.props.title)}</h2>
                                
                                </Reveal>
                                <Reveal effect="fadeInUp" duration={1000}>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s">
                                        {t(this.props.txt_d)}</p>
                                </Reveal>
                                <section id="section10" class="demo">
                                    <a href="#thanks"><span></span></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }    
}


export default translate('sec_banner')(SecBanner);
