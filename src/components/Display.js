import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';
import DividerPage from './DividerPage';
import CardNews from './CardNews';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    // componentWillMount(){
    //   alert("componentWillMount")
    // }
    componentDidMount() {
        this.getArticles(this.props.cntryCode,this.props.cateCode);
      //  alert("Display"+this.props.default);
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {

            this.getArticles(nextProps.cntryCode,nextProps.cateCode);
            this.setState({
                url: `https://newsapi.org/v2/top-headlines?country=${nextProps.cntryCode}&category=${nextProps.cateCode}&apiKey=c162a5e2769b494398a7d33395112ef0`
            });
        }
         //alert("willrecieve props"+nextProps.cntryCode)
    }

    getArticles(code, cate) {
        this.setState({ articles: [] });
        const API = 'c162a5e2769b494398a7d33395112ef0';
        axios.get(`https://newsapi.org/v2/top-headlines?country=${code}&category=${cate}&apiKey=${API}`)

            .then((response) => {
                console.log(response);
                const data = response.data.articles;
                console.log(data);
                this.setState({ articles: data });
            })
            .catch(error => {
                console.log(error);
            })
            // alert("get articles");
    }

    render() {
      // alert("render")

        const articleState = this.state.articles;
        let views = <div>Loading...</div>

        if (articleState && articleState.length > 1) {
          console.log(articleState);
          console.log(" Object Keys"+Object.keys(articleState));
            views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)

        }else {
          views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)

        }
        return (

            <div className="container">
              <DividerPage/>
              <h2>News API</h2>
              <div className="row">
                  <br />
                  <br />
                  {views}
              </div>
            </div>
        )
    }
}


export default Display;
