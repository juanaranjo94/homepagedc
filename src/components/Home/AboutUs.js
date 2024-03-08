import React, {Component} from 'react';
import { translate } from "react-translate";


class AboutUs extends Component{
    render(){
        let { t } = this.props;
        return(
            <section className="about_area_home" id="about">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about_home_item">
                                <img src={require ('../../img/home/icono-about.png').default} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                              <div className="seo_title">
                                <h1>{t(this.props.about_home_title)}</h1> 
                                                              
                                <p >{t(this.props.about_home_d)}</p>
                                <a href="/About" className="learn_btn">{t(this.props.read_more)}<i className="ti-arrow-right"></i></a>
                               
                              </div>                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default translate('about_home')(AboutUs);