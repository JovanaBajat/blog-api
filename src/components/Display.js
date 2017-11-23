import React, {Component} from 'react';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      active: false
    }
  }

  handleLike = () => {
    console.log('caca');
    this.state.active ? this.setState({active: false}) : this.setState({active: true})
  };
  handleOpen = (index) => {
    this.setState({showDialog: true, oneArticle: this.props.articles[index]});
  };

  handleClose = () => {
    this.setState({showDialog: false});
  };

  render() {
    const style = {
      margin: 12
    };
    return (
      <div className='display'>
        <ul>
          {this.props.articles.map((article, index) => {
            return (
              <li key={index} className="mainList">
                <span className='title'>{article.title}</span>
                <br/>
                <span className="text">"{article.text}"</span>
                <br/>
                <span className="author">by {article.author}</span>
                {/* <span className="date">{article.date}</span> */}
                <div>
                  <RaisedButton
                    label="Read more"
                    primary={true}
                    style={style}
                    onClick={() => this.handleOpen(index)}/>
                    <Dialog
                      modal={false}
                      autoScrollBodyContent={true}
                      open={this.state.showDialog}
                      onRequestClose={this.handleClose}
                      overlayStyle={{
                      backgroundColor: 'rgba(0, 0, 0, 0.1)'
                    }}>
                      <div className="dialogBody">
                        {this.state.oneArticle && <div>
                          <h2 className="dialogTitle">{this.state.oneArticle.title}</h2>
                          {this.state.oneArticle.photo &&
                          <img src={`my_uploads/${this.state.oneArticle.photo}`}/>
                          }
                          <p className="dialogText">{this.state.oneArticle.text}</p>
                          <p className="dialogAuthor">by {this.state.oneArticle.author}</p>
                        </div>}
                      </div>
                        <div className="buttonsLikeDeleteClose">
                        <i className="material-icons heart"
                          title="I like it"
                          onClick={this.handleLike}
                          style={{color: this.state.active  ? "red" : "inherit"}}
                          >favorite_border</i>
                        {this.state.oneArticle &&
                          <i className="material-icons"
                            title="Remove this blog">
                            <a href={`http://localhost:8080/home/${this.state.oneArticle._id}/delete`}>delete</a>
                          </i>
                        }
                        <i className="material-icons close"
                          title="close"
                          onClick={this.handleClose}>close
                        </i>
                      </div>
                    </Dialog>
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
