import React from "react";

class SearchBar extends React.Component{

    state ={ term: ""};

    onInPutChange =(event)=>{
      this.setState({term: event.target.value});
    };

    onFormSubmitb =(event)=>{
      // make sure that the browser does not attempt to automatically submit the form any time that the user actually submits. it
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
        // (this.state.term): so that our parent component is told what the current search term is.
    }

  render(){
    return (
      <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>

        {/* turn this <input> into a controlledinput. we're going to hook it up to the state of our searchbar class. reason: make sure that we are storing our data for the search term inside of the component and not inside the DOM.  value from line-5. then  add on an onChange prop, If we pass a callback handler to the onChange here it's going to be called any time that  <input> gets changed.*/}
        <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              />
          {/* or: onChange={e=>this.setState({term: e.target.value})} */}
        </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;


// AIzaSyCEMB2IVUCCeDEi1FF9QERC1ZAtohW3fo4