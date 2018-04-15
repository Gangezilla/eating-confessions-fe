import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confession: '',
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit({
      Title: this.state.title,
      Content: this.state.confession,
    });
    this.setState({
      confession: '',
      title: '',
    });
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <label
            htmlFor="Title"
          >
          Title
            <input
              type="text"
              value={this.state.confessionTitle}
              name="title"
              onChange={this.handleChange}
            />
          </label>
          <input
            type="text"
            value={this.state.confessionValue}
            name="confession"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="submit"
          />
        </form>
        <button
          onClick={this.props.getMoreResults}
        >
          Load More
        </button>
      </div>
    );
  }
}

export default Controls;
