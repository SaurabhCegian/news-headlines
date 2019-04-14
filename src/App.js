import React, { Component } from 'react';
import {  Container, Dropdown, Menu } from 'semantic-ui-react';
import CountryName from './components/CountryName';
import Categories from './components/Categories';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import Display from './components/Display';
import './App.css';
import PopupMenu from './components/PopupMenu';
import Popup from "reactjs-popup";
import { TextArea, Button } from 'semantic-ui-react';
import Modal from "react-responsive-modal";
import CardNews from './components/CardNews';


let code='';
let codeCate='';
let apiUrl=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c162a5e2769b494398a7d33395112ef0`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      cateData: [],
    }
    this.onChange = this.onChange.bind(this);
    //alert(this.props.default);
    //this.apiUrl = `https://newsapi.org/v2/sources?language=en&country=in&apiKey=011e822f19e44e59a8bf3f3d644a35e5`
    //this.changeUrl = this.changeUrl.bind(this);
  }
  onChange(event) {
      this.setState({ value: event.target.value });
    //  alert(event.target.value);

  }

  changeUrl(countryCode){
      code= countryCode;
      apiUrl=`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=c162a5e2769b494398a7d33395112ef0`;
      //alert("CountryCode "+countryCode)
         axios.get(apiUrl)
        .then((response) => {
           let sourcesData = response.data;
           this.setState({ data: sourcesData.sources });
           console.log("sourcesData.sources "+sourcesData.sources);
           console.log("Sources Data ",response);
        })

  }
  changeCategory(cateCode){
      codeCate= cateCode;
      apiUrl=`https://newsapi.org/v2/top-headlines?country=${code}&category=${cateCode}&apiKey=c162a5e2769b494398a7d33395112ef0`;
      //alert("CountryCode "+countryCode)
         axios.get(apiUrl)
        .then((response) => {
           let sourcesData = response.data;
           this.setState({ cateData: sourcesData.sources });
           console.log("sourcesData.sources "+sourcesData.sources);
           console.log("Sources Data ",response);
        })

  }
  render() {
    const allSources = this.state.data;
    const { open } = this.state;
    console.log("This state data "+this.state.data)
    return (

      <div className="App">
          <Menu fluid stackable inverted>
              <Container>
                <Menu.Item>
                  Headlines Today
                </Menu.Item>

              <Dropdown
              openOnFocus
              inline item placeholder='USA'
              options={ CountryName }
              onChange = {(ele, {value} ) => this.changeUrl(value) }
              />

              <Dropdown
              openOnFocus
              inline item placeholder='Business'
              options={ Categories }
              onChange = {(ele, {value} ) => this.changeCategory(value) }
              />
              </Container>

          </Menu>

          <div>
            <div className="row" >
                  <br />
                  {console.log("this country code "+code)}
                  {console.log("this state value "+this.state.value)}
                  <Display cntryCode={code ==''?'us':code} cateCode={codeCate}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
