import React, {Component} from 'react';
import PracticesDevOpsItem from './PracticesDevOpsItem';
import { translate } from "react-translate";


class PracticesDevOps extends Component{
    render(){

        let {t} = this.props;

        return(
            <section className="devops_practices_area sec_pad">
                <div className="container">
                    <PracticesDevOpsItem 
                        itemClass="devops_practices_item_two" 
                        rowclass="flex-row-reverse"  
                        DevOpsTitle={t(this.props.DevOpsTitle)} 
                        DevOpsDescrip={t(this.props.DevOpsDescrip)}
                        DevOpsTitle2={t(this.props.DevOpsTitle2)} 
                        DevOpsDescrip2={t(this.props.DevOpsDescrip2)}
                        />
                </div>
            </section>
        )
    }
}

export default translate('PracticesDevOps')(PracticesDevOps);
