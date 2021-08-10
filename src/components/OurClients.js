import React, {Component} from 'react';
import SeoTitle from '../components/Title/SeoTitle';
import { translate } from "react-translate";

class OurClients extends Component{
    render(){
        let { t } = this.props;
        return(
        <React.Fragment>
            <section className="our_clients_area sec_area bg-white " id="clients">
                <div className="container">
                    <div className="our_clients_content bg-light">
                        <div className="row">
                        <div className="col-lg-7">
                            <div className="row our_clients_logo">
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-target.png').default} alt=""/></a>
                                </div>                               
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-falabella.png').default} alt=""/></a>
                                    
                                </div>
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-miraclon.png').default} alt=""/></a>
                                </div>
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-bolivar.png').default} alt=""/></a>
                                </div>
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-logixboard.png').default} alt=""/></a>
                                </div>
                                <div className="col-6 our_clients_item">
                                    <a href="/Clients" className="intregration_icon"><img src={require('../img/home/logo-global.png').default} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex align-items-center">
                            <div className="our_clients_content">
                                
                                <SeoTitle Title={t(this.props.clients_home_title)} Tclass='text-left'/>
                                <p>{t(this.props.clients_home_d)}</p>
                                <a href="/Clients" className="learn_btn">{t(this.props.read_more)}<i className="ti-arrow-right"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }
}
export default translate('clients_home')(OurClients);