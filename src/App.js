import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";


/* ---- Pages ----*/
import Home from "./Pages/Home";
import DatabaseService from "./Pages/Database-service";
import TechnologyConsulting from "./Pages/Technology-consulting";
import SoftwareDevelopment from "./Pages/Software-development";
import WebAppServices from "./Pages/Web-app-services";
import About from "./Pages/About"
import Devops from "./Pages/Devops";
import Jobs from "./Pages/Jobs";
import Scrum from "./Pages/Scrum";
import Clients from "./Pages/Clients";
import OnepageMenu from './components/OnepageMenu';
import Footer from "./components/Footer/Footer";

class App extends Component{
 	
    constructor(props) {
        super(props);
        this.state = {language: 'en'}; 
        this.languageChange = this.languageChange.bind(this);   }
      
    languageChange(event) {
        this.setState({language: event.target.value});
    }

   _getLayout(lang){
	   return (
	   <TranslatorProvider translations={require('./assets/translations/'+lang+'.json')}>	
            <Router>   
                <OnepageMenu 
                    menu_txt1= "menu_txt1" menu_txt2= "menu_txt2" menu_txt3= "menu_txt3" 
                    menu_txt4= "menu_txt4" menu_txt5= "menu_txt5" menu_txt6= "menu_txt6" 
                    menu_logo= "menu_logo" menu_txt7= "menu_txt7" value={this.state.value} 
                    onChangeLanguage={this.languageChange} classMenu="menu_white1"
                    /> 
                <Switch>                       
                    <Route path="/database-service" component={DatabaseService} />
                    <Route path="/clients" component={Clients} />
                    <Route path="/technology-consulting" component={TechnologyConsulting} />
                    <Route path="/software-development" component={SoftwareDevelopment} />
                    <Route path="/web-App-Services" component={WebAppServices} />      
                    <Route path="/about" component={About} />     
                    <Route path="/devops" component={Devops} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/scrum" component={Scrum} />           
                    <Route exact={true} path={"/"} component={Home} />                 
                </Switch>
                <Footer 
                    value={this.state.value} onChangeLanguage={this.languageChange} />
            </Router>
	   </TranslatorProvider>)
   }

   render(){
	   return(this._getLayout(this.state.language));
            };
};

export default App;