import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false
    };
  }

  handleOpen = () => {
    this.setState({showDialog: true});
  };

  handleClose = () => {
    this.setState({showDialog: false});
  };

  render() {
    const style = {
      margin: 12
    };
    return (
      <div className="formulaire">
        <h2 className="urStory">Write your story</h2>
        <RaisedButton
          label="New Article"
          primary={true}
          onClick={this.handleOpen}/>
        <Dialog
          title="Add New Article"
          modal={false}
          open={this.state.showDialog}
          onRequestClose={this.handleClose}>

          <form method='POST' action={this.props.action} encType="multipart/form-data">
            <div className="myInput">
              <div className="form-group">
                <label className="col-form-label" htmlFor="formGroupExampleInput">Title</label>
                <input type="text" required className="form-control" id="formGroupExampleInput" name="title" placeholder="Title"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1" >Your blog goes here !</label>
                <textarea className="form-control" required minlength="50" id="exampleFormControlTextarea1" name="text" rows="3" placeholder="Write here..."></textarea>
              </div>
              <div className="form-group">
                <label className="col-form-label" htmlFor="formGroupExampleInput">Author</label>
                <input type="text" className="form-control" required id="formGroupExampleInput" name="author" placeholder="Author"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Add photo</label>
                <input type="file" name="photo" className="form-control-file" id="exampleFormControlFile1"/>
              </div>
            </div>
            <RaisedButton label="Cancel" onClick={this.handleClose} style={style}/>
            <RaisedButton label="Submit" type="submit" primary={true} style={style}/>
          </form>
        </Dialog>
      </div>
    );
  }

}

export default Form;
