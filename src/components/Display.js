import React, { Component } from 'react';
import '../App.css';


class Display extends Component {


  render() {
    const style = {
    margin: 12,
  };
    return (
      <div className='display'>
        <h2>This is our selection.. Enjoy!</h2>
        <ul>
          {this.props.articles.map((article, i) => {
            return (
              <li key={i}>
                <span className='title'>{article.title}</span> <br/>
                <span className="text">"{article.text}"</span> <br/>
                <span className="author">by {article.author}</span>
                <span className="date">{article.date}</span>
                <div className="buttons">
                  <i class="material-icons">favorite_border</i>
                  <i class="material-icons">zoom_in</i>
                  <a href={`http://localhost:8080/home/${article._id}/delete`}><i class="material-icons">delete</i></a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

}

export default Display;
