import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TranslatorProvider } from "react-translate";


/* ---- Pages ----*/
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import OnepageMenu from './components/OnepageMenu';


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
                <OnepageMenu  menu_logo= "menu_logo" value={this.state.value} 
                    onChangeLanguage={this.languageChange} classMenu="menu_white1"
                    /> 
                <Switch>             
                    <Route path="/jobs" component={Jobs} />            
                    <Route exact={true} path={"/pagedc"} component={Home} />                 
                </Switch>

            </Router>
	   </TranslatorProvider>)
   }

   render(){
	   return(this._getLayout(this.state.language));
            };
};

export default App;