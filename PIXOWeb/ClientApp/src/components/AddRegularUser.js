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
exports.AddRegularUser = void 0;
var React = require("react");
var fetchRegularUsers_1 = require("./fetchRegularUsers");
var AddRegularUser = /** @class */ (function (_super) {
    __extends(AddRegularUser, _super);
    function AddRegularUser(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { title: "", loading: true, cityList: [], userData: new fetchRegularUsers_1.UserData };
        fetch("api/User/GetListaQyteteve")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.setState({ cityList: data });
        });
        var userId = 1;
        //var userId = this.props.match.params["userId"];
        // This will set state for Edit employee  
        if (userId > 0) {
            fetch('api/User/Details/' + userId)
                .then(function (response) { return response.json(); })
                .then(function (data) {
                _this.setState({ title: "Edit", loading: false, userData: data });
            });
        }
        // This will set state for Add employee  
        else {
            _this.state = { title: "Create", loading: false, cityList: [], userData: new fetchRegularUsers_1.UserData };
        }
        // This binding is necessary to make "this" work in the callback  
        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleCancel = _this.handleCancel.bind(_this);
        return _this;
    }
    AddRegularUser.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderCreateForm(this.state.cityList);
        return React.createElement("div", null,
            React.createElement("h1", null, this.state.title),
            React.createElement("h3", null, "User"),
            React.createElement("hr", null),
            contents);
    };
    AddRegularUser.prototype.handleSave = function (event) {
        var _this = this;
        event.preventDefault();
        var data = new FormData(event.target);
        // PUT request for Edit user.  
        if (this.state.userData.userId) {
            fetch('api/User/Edit', {
                method: 'PUT',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/fetchregularuser");
            });
        }
        // POST request for Add employee.  
        else {
            fetch('api/User/Create', {
                method: 'POST',
                body: data,
            }).then(function (response) { return response.json(); })
                .then(function (responseJson) {
                _this.props.history.push("/fetchregularuser");
            });
        }
    };
    AddRegularUser.prototype.handleCancel = function () {
        this.props.history.push("/fetchregularuser");
    };
    // Returns the HTML Form to the render() method.  
    AddRegularUser.prototype.renderCreateForm = function (cityList) {
        return (React.createElement("form", { onSubmit: this.handleSave },
            React.createElement("div", { className: "form-group row" },
                React.createElement("input", { type: "hidden", name: "userId", value: this.state.userData.userId })),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: " control-label col-md-12", htmlFor: "Emri" }, "Emri"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "emri", defaultValue: this.state.userData.emri, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Mbiemri" }, "Mbiemri"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "mbiemri", defaultValue: this.state.userData.mbiemri, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "Email" }, "Email adresa"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "email", defaultValue: this.state.userData.emailAddress, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "phoneNumber" }, "Numri i telefonit"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("input", { className: "form-control", type: "text", name: "phonenumber", defaultValue: this.state.userData.phoneNumber, required: true }))),
            React.createElement("div", { className: "form-group row" },
                React.createElement("label", { className: "control-label col-md-12", htmlFor: "City" }, "Qyteti"),
                React.createElement("div", { className: "col-md-4" },
                    React.createElement("select", { className: "form-control", "data-val": "true", name: "City", defaultValue: this.state.userData.qyteti, required: true },
                        React.createElement("option", { value: "" }, "-- Zgjedh Qytetin --"),
                        cityList.map(function (city) {
                            return React.createElement("option", { key: city.cityId, value: city.cityName }, city.cityName);
                        })))),
            React.createElement("div", { className: "form-group" },
                React.createElement("button", { type: "submit", className: "btn btn-default" }, "Save"),
                React.createElement("button", { className: "btn", onClick: this.handleCancel }, "Cancel"))));
    };
    return AddRegularUser;
}(React.Component));
exports.AddRegularUser = AddRegularUser;
//# sourceMappingURL=AddRegularUser.js.map