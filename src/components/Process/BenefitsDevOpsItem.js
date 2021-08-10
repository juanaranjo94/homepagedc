import React, {Component} from 'react';

class BenefitsDevOpsItem extends Component {
    render(){
        let { sTitle, Descrip} = this.props;
        return(
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="software_featured_item text-left mb_20">
                    <h3 className="f_600 t_color3">{sTitle}</h3>
                    <p className=" f_size_18 l_height mb_40">{Descrip}</p>
                </div>
            </div>
        )
    }
}
export default BenefitsDevOpsItem