import React, {Component} from 'react';
import { translate } from "react-translate";

class DevOpsItem extends Component {
    render(){

        let { t } = this.props;

    return(
        <section className="devops_part_area sec_pad bg-light">
            <div className="container">
                <div className="d-flex">
                    <div className="devops_part_item">
                        <img src={require ('../../img/process/DevIcon.png').default} alt=""/>
                        <h4>Dev</h4>
                        <p>{t(this.props.Dev_txt)}</p>
                    </div>
                    <div className="devops_part_item">
                        <img src={require ('../../img/process/OpsIcon.png').default} alt=""/>
                        <h4>Ops</h4>
                        <p>{t(this.props.Ops_txt)}</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default translate('DevOpsItem')(DevOpsItem);


