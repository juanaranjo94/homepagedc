import React, {Component} from 'react';
import Slider from 'react-slick';
import SliderHomeItem from './SliderHomeItem';
import { translate } from "react-translate";

class SliderHome extends Component {
    
    render(){
        let { t } = this.props;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 4000,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return(
            <div className="SliderHome">

                    <Slider {...settings}>
                        
                        <SliderHomeItem 
                                url="/software-development" 
                                titulo={t(this.props.serv2_t)} 
                                image2="slider-software.png" 
                                styleSlider="service_1" 
                                description={t(this.props.serv2_d)} 
                                btnSlider={t(this.props.read_more)}
                        />
                        <SliderHomeItem 
                            url="/web-app-services" 
                            titulo={t(this.props.serv4_t)} 
                            image2="slider-web-app.png" 
                            styleSlider="service_2" 
                            description={t(this.props.serv4_d)} 
                            btnSlider={t(this.props.read_more)}
                        />
                        <SliderHomeItem 
                            url="/database-service" sliderClass="flex-row-reverse" 
                            titulo={t(this.props.serv3_t)} 
                            image2="slider-database.png" 
                            styleSlider="service_3" 
                            description={t(this.props.serv3_d)} 
                            btnSlider={t(this.props.read_more)}
                        />
                        <SliderHomeItem 
                            url="/technology-consulting" sliderClass="flex-row-reverse" 
                            titulo={t(this.props.serv1_t)}  
                            image2="slider-consulting.png" 
                            styleSlider="service_4" 
                            description={t(this.props.serv1_d)} 
                            btnSlider={t(this.props.read_more)}
                        />
                    
                    </Slider>
            </div>
        )
    }
}

export default translate('services_home')(SliderHome);