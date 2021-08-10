import React, {Component} from "react";
import Slider from 'react-slick';
import SeoTitle from '../Title/SeoTitle';
import { translate } from "react-translate";

class CasosExito extends Component {
    constructor(){
        super();
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
            items:[
                {
                    "id": 1,
                    "image": "grid1.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Success Cases 1",
                },
                {
                    "id": 2,
                    "image": "grid1.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Success Cases 2",                
                },
                {
                    "id": 3,
                    "image": "grid1.jpg",
                    "description": "Loo car boot bodge smashing I up the duff horse play give us a bell, William bugger all mate happy days mush at public school tosser victoria sponge, say lurgy hunky-dory twit hotpot gutted mate.",
                    "name": "Success Cases 3",                    
                }
            ]
        }

    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }
    render(){

        let { t } = this.props;

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        let 

        return(
            <section className="cases_exi_area sec_pad" id='cases'>
                <div className="container">
                <SeoTitle Title={t(this.props.casos_title)}/>
                    <div className="row">
                        <div className="slider_nav">
                            <i className="arrow_left prev" onClick={this.previous}></i>
                            <i className="arrow_right next" onClick={this.next}></i>
                        </div>
                        <Slider ref={c => (this.slider = c)} className="cases_exi_info" {...settings}>
                            {
                            
                                this.state.items.map(item =>(                              
                                    <div className="item" key={item.id}>
                                        <div className="cases_exi_item">
                                            <img src={require('../../img/home/' + item.image).default} alt=""/>
                                           
                                            <div className="hover_content_casos">
                                                <div className="content">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}


export default translate('services_home')(CasosExito);