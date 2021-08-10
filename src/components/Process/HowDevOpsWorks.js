import React, {Component} from 'react';
import { translate } from "react-translate";

class HowDevOpsWorks extends Component {
    render(){
        let {t} = this.props;
        return(
            <section className="devops_how_area sec_pad">
                <div className="container">
                    <div className="devops_how_info text-center ">
                        <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50">{t(this.props.Title)}</h2>
                        <p>{t(this.props.txt1)}</p>
                        <p>{t(this.props.txt2)}</p>
                    </div>
                </div>
            </section>
         )
    }
}

export default translate('HowDevOpsWorks')(HowDevOpsWorks);