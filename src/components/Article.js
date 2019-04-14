import React from 'react';
import './article.css';
import { Card, Image } from 'semantic-ui-react'

const Article = (props) => {
    const { details } = props;
    // console.log(props);
    return (
      <div className="card"  style={{padding:'20px'}}>
          <Card>
            <Image src={details.urlToImage}  alt="NewsImage"/>
            <Card.Content>
              <Card.Header>{details.title}</Card.Header>
              <Card.Meta>
              </Card.Meta>
              <Card.Description><p className="card-text">{details.description}</p></Card.Description>
            </Card.Content>
            <Card.Content extra>
            <h6 className="card-title">
            <a href={details.url} target="_blank">
              {details.url}
            </a>
            </h6>
            </Card.Content>
          </Card>
      </div>
    )
}

export default Article;
