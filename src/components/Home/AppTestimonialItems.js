import React, {Component} from 'react';


class AppTestimonialItems extends Component{
   render(){
        let { NameT, Position, DescripT } = this.props;
    return(
            <div className="app_testimonial_item text-center">
                <div className="author_info">
                        <h6 className="f_size_18">{NameT}</h6>
                        <p>{Position}</p>
                </div>
                <p className="f_400">{DescripT}</p>
            </div>

        )
   }
}
export default AppTestimonialItems;

