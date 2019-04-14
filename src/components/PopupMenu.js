import React, { Component } from 'react';
import Popup from "reactjs-popup";
import { TextArea, Button, Icon, Form } from 'semantic-ui-react';
import Modal from "react-responsive-modal";
import CardNews from './CardNews';
import 'semantic-ui-css/semantic.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import  './PopupMenu.css';


library.add(faArrowRight,faArrowLeft);

let newData;
const arrLeft ={
  marginLeft: '1px',

}
const arrRight ={
  marginLeft: '1070px',
}
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
                    open: false,
                    heading: '' ,
                    desc: '',
                    url: '',
                    isOpen: false,
                    data: [{heading:'Heading 1', desc:'Description1', url:'url1'}],
                    count:0,
                    currentPage:0,
                    pageSize: 3,
                    pageNo:1,
                 };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event)  {

    this.setState({[event.target.name]:event.target.value});

    }


  handleSubmit(event) {
    let obj ={
      heading: this.state.heading,
      desc: this.state.desc,
      url:this.state.url,
    }

        this.setState({
          isOpen:true,
            data: [...this.state.data,obj],
          count: this.state.count+1,

        });
  }

    onOpenModal = () => {
      this.setState({ open: true, isOpen:false, heading:'', desc:'', url:'' });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };
        //Slide Code
        onPage(navState) {

        switch (navState) {

        case 'prev':
          if (this.state.currentPage - 1 >= 0) {
            this.setState({
              currentPage: this.state.currentPage - 1,
              pageNo: this.state.pageNo - 1
            })

          }
          break;

          case 'next':
            if (this.state.currentPage + 1 <= this.state.count) {
              this.setState({
                currentPage: this.state.currentPage + 1,
                pageNo: this.state.pageNo + 1
              })

            }
            break;
        }
      }

    render() {
      const { open } = this.state;
      const newsList= [...this.state.data].splice(this.state.currentPage,this.state.pageSize);
      //console.log(" data " +JSON.stringify(this.state.data));

      return (
        <div>
        <Button  style={{display : 'inline-block'}}className="btn" primary onClick={this.onOpenModal} >+Add News</Button>
        {!this.state.isOpen ?
            <div className="form">
                    <Modal open={open} onClose={this.onCloseModal} center>
                    <Form style={{ width:"500px" }} size="100px" onSubmit={this.handleSubmit}>
                         <label><h3>Enter News Details</h3></label>
                           <Form.Group widths='equal'>
                             <Form.Input required fluid label='Heading' name="heading"  value={this.state.heading} onChange={this.onChange} placeholder='News Heading' />
                           </Form.Group>
                           <Form.Group inline>
                           </Form.Group>
                           <Form.TextArea required label='Description' name="desc" placeholder='Description' onChange={this.onChange} value={this.state.desc}  />
                           <Form.Input required fluid label='Link' name="url" placeholder='Link' value={this.state.url} onChange={this.onChange} />
                           <Form.Button color='red' type="submit">Submit</Form.Button>
                         </Form>

                    </Modal>

                    {newsList.map(item => <CardNews item={item}/>)}
              </div> : <div>
                             {newsList.map(item => <CardNews item={item}/>)}
                       </div>
        }
              <div>
                  <Button icon labelPosition='left' onClick={() => this.onPage('prev')}>
                    Prev
                    <Icon name='left arrow' />
                  </Button>
                  <Button icon labelPosition='right' onClick={this.state.pageNo  <= this.state.count-1 ?() => this.onPage('next'):null}>
                    Next
                    <Icon name='right arrow' />
                  </Button>
              </div>
        </div>
      );
    }
}

export default App;
