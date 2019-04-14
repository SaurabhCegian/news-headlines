import React, { Component } from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import './DividerPage.css';
import './article.css';
import Article from './Article';
import CardNews from './CardNews';
import PopupMenu from './PopupMenu';
class DividerPage extends Component{
  render(){
    return(
      <div><h2>Your News</h2>
      <Segment style={{height:'450px'}}>
        <Divider hidden  />
        <PopupMenu/>
      </Segment>
      </div>
    );
  }
}

export default DividerPage;
