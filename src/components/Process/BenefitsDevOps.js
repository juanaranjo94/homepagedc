import React, { Component } from 'react';
import BenefitsDevOpsItem from './BenefitsDevOpsItem';
import SeoTitle from '../Title/SeoTitle'
import { translate } from "react-translate";


class BenefitsDevOps extends Component{
    render(){

        let {t} = this.props;

        return(
            <section className="devops_benefits_area bg-light sec_pad">
                <div className="container">
                    <SeoTitle 
                        Title={t(this.props.Title)}
                        Tclass="text-center" />
                    <div className="row devops_benefits_info">
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits1Title)}
                            Descrip={t(this.props.Benefits1Descrip)}/>
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits2Title)}
                            Descrip={t(this.props.Benefits2Descrip)}/>
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits3Title)}
                            Descrip={t(this.props.Benefits3Descrip)}/>
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits4Title)}
                            Descrip={t(this.props.Benefits4Descrip)}/>
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits5Title)}
                            Descrip={t(this.props.Benefits5Descrip)}/>
                        <BenefitsDevOpsItem  
                            sTitle={t(this.props.Benefits6Title)}
                            Descrip={t(this.props.Benefits6Descrip)}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default translate('BenefitsDevOps')(BenefitsDevOps);