import React from 'react';
import styled from 'react-emotion';

const FixedControls = styled('div')`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  max-width: 560px;
  margin: 0 auto;
  background: white;
  padding: 0 10px 10px;
`;

const Form = styled('form')`
  width: 100%;
`;

const FormFields = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

const Input = styled('input')`
  width: 100%;
  line-height: 30px;
  margin: 2px 0;
`;

const SubmitContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

const Submit = styled('input')`
  border-radius: 0;
  align-self: flex-end;
  height: 40px;
  width: 150px;
  margin-top: 10px;
  border-color: #666;
  color: #ff294c;
  font-size: 20px;
`;

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
      <FixedControls>
        <Form
          onSubmit={this.handleSubmit}
        >
          <FormFields>
            <div>
              <Input
                type="text"
                placeholder="Title"
                value={this.state.confessionTitle}
                name="title"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Input
                type="text"
                value={this.state.confessionValue}
                name="confession"
                onChange={this.handleChange}
                placeholder="Story"
              />
            </div>
          </FormFields>
          <SubmitContainer>
            <Submit
              type="submit"
              value="Submit"
            />
          </SubmitContainer>
        </Form>
      </FixedControls>
    );
  }
}

export default Controls;
