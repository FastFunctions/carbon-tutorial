import React, { Component } from 'react';
import {Button, Form, TextInput} from 'carbon-components-react';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      InvalidPasswordProps : {
        className: 'some-class',
        id: 'pass',
        labelText: 'Password',
        invalid: false,
        invalidText:
          'Your account or password is incorrect. Please try again'
      }, 
      additionalPrps : {
        className: 'full-width',
        onSubmit: e => {
          e.preventDefault();
          this.login(e)
        },
      }
    };

  }

  login() {
    let pass = document.getElementById('pass');
    const { InvalidPasswordProps } = this.state;
    if(pass.value !== 'Senha123') {      
      InvalidPasswordProps.invalid = true;
      this.setState({InvalidPasswordProps})
    } else {
      const { history } = this.props;
      history.push('/');
    }
  }

  render() {
    const { InvalidPasswordProps, additionalPrps } = this.state;

    return (
        <div className="bx--grid bx--grid--full-width">
          <div className="bx--row">
          <div className="bx--col-lg"></div>
          <div className="bx--col-lg">
            <div className="bx--row common-margin ">
              <h1 className="landing-page__heading">
                Login
              </h1>
            </div>
            <div className="bx--row">
              <Form {...additionalPrps}>

                <TextInput
                  type="email"
                  required
                  id="email"
                  labelText="Email"
                />

                <TextInput
                  type="password"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  {...InvalidPasswordProps}
                />

                <Button type="submit" className="common-margin" id="form-button">
                  Login
                </Button>
              </Form>
            </div>
          </div>
          <div className="bx--col-lg"></div>
          </div>
        </div>
    );
  }
}

export default LoginPage;
