"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
var React = require("react");
var react_1 = require("react");
//const [errorMessages, setErrorMessages] = useState({});
//const [isSubmitted, setIsSubmitted] = useState(false);
//const renderErrorMessage = (name: string) =>
//    name === errorMessages.name && (
//        <div className="error">{errorMessages.message}</div>
//        );
// JSX code for login form
var loginPage = /** @class */ (function (_super) {
    __extends(loginPage, _super);
    function loginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    loginPage.prototype.render = function () {
        return (React.createElement("div", { className: "form center-form" },
            React.createElement("form", null,
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Username "),
                    React.createElement("div", { className: "col-sm-4" },
                        React.createElement("input", { type: "text", name: "uname", className: "form-control input-sm", required: true }))),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", null, "Password "),
                    React.createElement("div", { className: "col-sm-4" },
                        React.createElement("input", { type: "password", name: "pass", className: "form-control input-sm", required: true }),
                        React.createElement("small", { id: "emailHelp", className: "form-text text-muted" }, "We'll never share your informations with anyone else."))),
                React.createElement("div", { className: "btn btn-primary" },
                    React.createElement("input", { type: "submit" })))));
    };
    return loginPage;
}(react_1.Component));
exports.loginPage = loginPage;
//# sourceMappingURL=loginPage.js.map