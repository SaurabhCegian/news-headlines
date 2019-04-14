import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const cardStyle={
  margin: '30px',
  display:'inline-block',
}
let arr=[];
class CardNews extends React.Component {
  constructor(props){
        super(props);
    }
    render() {

        return (
          <div style={cardStyle}>
            <Card
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KhEflROgcLCHu3pp2MHDRLPChtNyLEC1HUeKhmY4FdsNc87n'
              header={this.props.item.heading}
              description={this.props.item.desc}
              extra= <a href={this.props.item.url} target="_blank">
                      {this.props.item.url}
                     </a>
            />
          </div>
        );
    }
}
export default CardNews
