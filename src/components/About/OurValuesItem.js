import React, {Component} from 'react';

class OurValuesItem extends Component{
    render(){
        let{image, Title} = this.props;
        return(
            <div className="values_area wow fadeInUp">
                <div className="item">
                    <img src={require("../../img/about/" + image).default} alt=""/>
                    <h6>{Title}</h6>
                </div>
            </div>
        )
    }
}

export default OurValuesItem;