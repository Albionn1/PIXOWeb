import * as React from 'react';
import { useState } from 'react';
import { Component } from 'react';

//const [errorMessages, setErrorMessages] = useState({});
//const [isSubmitted, setIsSubmitted] = useState(false);

//const renderErrorMessage = (name: string) =>
//    name === errorMessages.name && (
//        <div className="error">{errorMessages.message}</div>
//        );

// JSX code for login form

export class loginPage extends Component { 
    render() {
        return (
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                        {/*{renderErrorMessage("uname")}*/}
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                        {/* {renderErrorMessage("pass")}*/}
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>)
    }
}
