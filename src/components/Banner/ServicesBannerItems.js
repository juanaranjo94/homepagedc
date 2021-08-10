import React, {Component} from 'react';

class ServiceBannerItems extends Component {
    render(){

        let {Title, TitleN, TitleP} = this.props;

        return(
                    <div className="servicesInt_content">
                        <h3>{Title}&nbsp;<strong>{TitleN}</strong> </h3>
                        <p>{TitleP}</p>
                        

                    </div>
        )
    }
}

export default ServiceBannerItems;