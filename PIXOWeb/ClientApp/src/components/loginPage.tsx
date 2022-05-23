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
            <div className="form center-form">
                <form>
                    <div className="form-group">
                        <label>Username </label>
                        <div className="col-sm-4">
                        <input type="text" name="uname" className="form-control input-sm" required />
                            {/*{renderErrorMessage("uname")}*/}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <div className="col-sm-4">
                        <input type="password" name="pass" className="form-control input-sm" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your informations with anyone else.</small>
                        </div>
                        {/* {renderErrorMessage("pass")}*/}
                    </div>
                    <div className="btn btn-primary">
                        <input type="submit" />
                    </div>
                </form>
            </div>)
    }
}
