import React, {Component} from 'react';
import OurValuesItem from './OurValuesItem';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";


class OurValues extends Component{
    render(){

        let { t } = this.props;
       
        return(
            <section className="our_values_area sec_area">
                <div className="container">
                    <div className="our_values_content ">
                        <div className="seo_title_area text-center">
                            <SeoTitle Title={t(this.props.title_v)}
                            Tclass="text-white"/>
                        </div>
                        <div className="our_values_inner">
                            <OurValuesItem image="innovation.png" Title={t(this.props.value1)}/>
                            <OurValuesItem image="attract.png" Title={t(this.props.value2)}/>
                            <OurValuesItem image="commitment.png" Title={t(this.props.value3)}/>
                        </div>
                    </div>    
                </div>
            </section>
        )
    }
}

export default translate('values_about')(OurValues);