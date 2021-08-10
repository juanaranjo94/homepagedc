import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import { translate } from "react-translate";

class BannerProcess extends Component {
    render(){

        let { t , img_process, Pclass, P2class, P3class, imgPclass} = this.props;
        

        return(
            <section className={`${Pclass}`}>  
                <div className={`${P2class}`}></div>
                <div className={`${P3class}`}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={500}>
                                    <div className="scrum_banner_content wow fadeInLeft" data-wow-delay="0.4s">
                                        <h1 className="f_p f_700 f_size_50 w_color">{t(this.props.Title)}</h1>
                                        <p className="w_color f_p f_size_18">{t(this.props.TextD)}</p>
                                    </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6" >
                            <Reveal effect="fadeInRight" duration={1200}>
                                    <div className="banner_img" >
                                        <img src={require ("../../img/process/" + img_process).default} alt=""/>               
                                    </div>
                            </Reveal>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

export default translate('BannerIntProcess')(BannerProcess);