import React , {Component} from 'react';

class Footer extends Component {

    state = {language: 'en'};
    


    render(){
        let { onChangeLanguage, value,  botonLang} = this.props;

        return(
            <footer className="footer_area footer_area_four f_bg">
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-6">
                            <p className="mb-0 f_400">© DreamCode Soft 2018 All rights reserved.</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-6">
                            <div className="f_social_icon_two text-center">                                 
                                <a href="https://wwww.facebook.com" key="1"><i className="ti-facebook"></i></a>
                                <a href="https://wwww.facebook.com" key="2"><i className="ti-twitter-alt"></i></a>
                                <a href="https://wwww.facebook.com" key="3"><i className="ti-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <ul className="list-unstyled f_menu text-right">
                                <li><a href=".#">Legal</a></li>
                                <li><a href=".#">Privacy Policy</a></li>
                                <li> 
                                    <select className="select-lang" defalutValue="" value={value} onChange={(value)=>{onChangeLanguage(value)}} >
                                        <option value="es" >Spanish</option>
                                        <option selected={'selected'} value="en" >English</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
        )
    }
}
export default Footer;