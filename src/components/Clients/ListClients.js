import React, {Component} from 'react';
import ListClientsitem from './ListClientsitem';
import { translate } from "react-translate";

class ListClients extends Component{

    render(){
    
            let { t } = this.props;

        return(
            <section className="erp_features_area_two sec_pad">
                <div className="container">
                    <ListClientsitem 
                        nameClient='Apple' 
                        rowClass="flex-row-reverse" 
                        image="crm_img1.jpg" 
                        imgLogo="apple.png" 
                        dClient={t(this.props.dClient1)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='Target' 
                        rowClass="" 
                        image="crm_img2.jpg" 
                        imgLogo="logo-target.png" 
                        dClient={t(this.props.dClient2)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='Miraclon' 
                        rowClass="flex-row-reverse" 
                        image="crm_img3.jpg" 
                        imgLogo="logo-miraclon.png"
                        dClient={t(this.props.dClient3)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='LogixBoard' 
                        rowClass="" 
                        image="crm_img2.jpg" 
                        imgLogo="logo-logixboard.png"
                        dClient={t(this.props.dClient4)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='Banco Falabella' 
                        rowClass="flex-row-reverse" 
                        image="crm_img1.jpg" 
                        imgLogo="logo-falabella.png"
                        dClient={t(this.props.dClient5)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='Seguros Bolivar' 
                        rowClass="" 
                        image="crm_img2.jpg" 
                        imgLogo="logo-bolivar.png"
                        dClient={t(this.props.dClient6)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                    <ListClientsitem 
                        nameClient='Global Network Solutions' 
                        rowClass="flex-row-reverse" 
                        image="crm_img3.jpg" 
                        imgLogo="logo-global.png"
                        dClient={t(this.props.dClient7)}
                        item1={t(this.props.item1)}
                        item2={t(this.props.item2)}
                        item3={t(this.props.item3)}/>
                </div>
            </section>
        )
    }    
}

export default translate('ClientsList')(ListClients);