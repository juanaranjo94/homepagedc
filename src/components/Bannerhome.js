import React, {Component} from 'react';
import { translate } from "react-translate";


class Bannerhome extends Component{
    render(){
        let { t } = this.props;

        return(
        <React.Fragment>
        <section className="action_banner_area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4">
                        <img src={require("../img/home/action_img.png").default} alt=""/>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="erp_content">
                            <h2>{t(this.props.txt_banner)}</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
        )
    }
}
export default translate('banner_home')(Bannerhome);
