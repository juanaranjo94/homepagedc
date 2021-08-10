import React, {Component} from 'react';

class PracticesDevOpsItem extends Component {
    render(){
        let {itemClass, rowclass, DevOpsTitle, DevOpsTitle2, DevOpsDescrip, DevOpsDescrip2 }= this.props;
        return(
            <div className={`devops_practices_item ${itemClass}`}>
                <div className={`row align-items-center ${rowclass}`}>
                    <div className="col-lg-6 devops_practices_bg">
                        <div className="devops_practices_content wow fadeInDown">
                            <h3>{DevOpsTitle}</h3>
                            <p>{DevOpsDescrip}</p>
                            
                        </div>                   
                    </div>
                    <div className="col-lg-6 devops_practices_bg">
                        <div className="devops_practices_content wow fadeInDown">
                            <h3>{DevOpsTitle2}</h3>
                            <p>{DevOpsDescrip2}</p>                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PracticesDevOpsItem;