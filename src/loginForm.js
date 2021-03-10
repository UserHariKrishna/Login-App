
import React from 'react';
export default class LoginForm extends React.Component {
  
    // Using a class based component here because we're accessing DOM refs
    constructor(props) {
        super(props);
        this.userRef = React.createRef();
        this.pwdRef = React.createRef();
      }
      validateForm() {
        return this.userRef.current.value.length > 0 && this.pwdRef.current.value.length > 0;
      }
    handleSignIn(e) {
        if(this.validateForm()){
            e.preventDefault()
            let username = this.userRef.current.value
            let password = this.pwdRef.current.value
            this.props.onSignIn(username, password)
        }else{
            alert("Please add valid email address and pwd");
        }
      
    }
    
    render() {
      return (
          <div className="login">
              <h2>Brightedge Login</h2>
              <form onSubmit={this.handleSignIn.bind(this)}>
                  <label><b>User Name</b> </label>
                  <input type="text"  id="Uname" placeholder="Username" ref={this.userRef} />
                  <br></br>
                  <label><b>Password</b></label>
                  <input type="Password"  id="Pass" placeholder="Password" ref={this.pwdRef} />
                  <br></br>
                  <div><input type="submit"  id="log" value="Login" /></div>
              </form>
          </div>
      )
    }
  
  }