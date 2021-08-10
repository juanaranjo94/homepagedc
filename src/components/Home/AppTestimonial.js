import React, {Component} from 'react';
import Slider from 'react-slick';
import SeoTitle from '../Title/SeoTitle';
import AppTestimonialItems from '../Home/AppTestimonialItems';



class AppTestimonial extends Component{
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
    this.slider.slickNext();
    }
    previous() {
    this.slider.slickPrev();
    }
   render(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 90000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
            <section className="app_testimonial_area bg-light sec_area" id="testimonial">
                <div className="container nav_container">
                    <div className="app_testimonial_content bg-white">
                    <SeoTitle Title="We've heard things like" Tclass="text-center"/>
                        <div className="slider_nav mt-5">
                            <i className="ti-arrow-left prev" onClick={this.previous}></i>
                            <i className="ti-arrow-right next" onClick={this.next}></i>
                        </div>
                        <Slider ref={c => (this.slider = c)} className="app_testimonial_slider" {...settings}>
                            <div className="app_testimonial_item text-center">
                                <div className="author_info">
                                    <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Julián A</h6>
                                    <p>CEO AT LOGIXBOARD</p>
                                </div>
                                <p className="f_400">DreamCode has two fundamental differences. One, they are radically transparent, providing us with great comfort that we are in the best possible hands. Second, they have incredible business acumen, allowing them to not only understand our technical needs, but more importantly, the core business drivers behind our decisions and goals</p>
                            </div>
                            <AppTestimonialItems 
                                NameT="Juan Sebastian" 
                                Position="Ingeniero Multimedia" 
                                DescripT="Dreamcode es lo mejor que han creado en el mundo" />
                            <div className="app_testimonial_item text-center">
                                <div className="author_info">
                                    <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Lurch Schpellchek</h6>
                                    <p>UI/UX designer</p>
                                </div>
                                <p className="f_400">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                            </div>
                            <div className="app_testimonial_item text-center">
                                <div className="author_info">
                                    <h6 className="f_p f_500 f_size_18 t_color3 mb-0">Lurch Schpellchek</h6>
                                    <p>UI/UX designer</p>
                                </div>
                                <p className="f_400">What a load of rubbish bits and bobs pear shaped owt to do with me bubble and squeak jolly good morish tinkety tonk old fruit, car boot my good sir buggered plastered cheeky David, haggle young delinquent say so I said bite your arm off easy peasy. Skive off it's all gone to pot buggered.</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
   }
}
export default AppTestimonial;

