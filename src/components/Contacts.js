import React, {Component} from 'react';
import SeoTitle from '../components/Title/SeoTitle';
import { translate } from "react-translate";


class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        let { t } = this.props;
        // const {name, email, subject, message, emailStatus} = this.state;
        return(
            <section className="contact_info_area sec_pad bg_color" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                        </div> 
                        <div className="contact_form col-lg-8 text-center">
                            <SeoTitle Title={t(this.props.title)} TitleP={t(this.props.titleP)}/>
                            <form onSubmit={this.submitForm} className="contact_form_box" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" id="name" name="name" placeholder={t(this.props.name)} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group text_box">
                                            <input type="text" name="email" id="email" placeholder={t(this.props.email)} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <input type="text" id="subject" name="subject" placeholder={t(this.props.subject)} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group text_box">
                                            <textarea onChange={this.handleChange} name="message" id="message" cols="30" rows="10" placeholder={t(this.props.message)}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn_six slider_btn">{t(this.props.btn)}</button>
                            </form>
                            {/* {emailStatus ? emailStatus : null} */}
                            <div id="success">Your message succesfully sent!</div>
                            <div id="error">Opps! There is something wrong. Please try again</div>
                        </div>
                        <div className="col-2">
                        </div> 
                    </div>
                    
                </div>
            </section>
        )
    }
}


export default translate('contact')(Contacts);