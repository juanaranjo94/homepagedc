import React, {Component} from 'react';
import SeoTitle from './Title/SeoTitle';
import { translate } from "react-translate";

class Expertise extends Component{
    render(){

        let { t } = this.props;


        return(
                <section className="expertise_area sec_area">
                    <div className="container">
                    <div className="expertise_content bg-light">
                        <div className="seo_title_area text-center">
                            <SeoTitle Title={t(this.props.title_e)}/>

                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/CloudNative.png").default} alt=""/>
                                    <h5>{t(this.props.exp_1)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/WebFrontEnd.png").default} alt=""/>
                                    <h5>{t(this.props.exp_2)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/FullStackDev.png").default} alt=""/>
                                    <h5>{t(this.props.exp_3)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/SoftArchite.png").default} alt=""/>
                                    <h5>{t(this.props.exp_4)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/MicroServ.png").default} alt=""/>
                                    <h5>{t(this.props.exp_5)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/APIDesign.png").default} alt=""/>
                                    <h5>{t(this.props.exp_6)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/AgilSoft.png").default} alt=""/>
                                    <h5>{t(this.props.exp_7)}</h5>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <a href="/#" className="expertise_int_item">
                                    <img src={require("../img/about/DevOpsIcon.png").default} alt=""/>
                                    <h5>{t(this.props.exp_8)}</h5>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            )
    }

}


export default translate('expertise_about')(Expertise);