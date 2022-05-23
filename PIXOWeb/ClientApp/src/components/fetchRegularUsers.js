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
exports.UserData = exports.FetchUser = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var FetchUser = /** @class */ (function (_super) {
    __extends(FetchUser, _super);
    function FetchUser(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { userList: [], loading: true };
        fetch("api/User/Index")
            .then(function (Response) { return Response.json(); })
            .then(function (data) {
            _this.setState({ userList: data, loading: false });
        });
        _this.handleDelete = _this.handleDelete.bind(_this);
        _this.handleEdit = _this.handleEdit.bind(_this);
        return _this;
    }
    FetchUser.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderUserTable(this.state.userList);
        this.renderUserTable(this.state.userList);
        return React.createElement("div", null,
            React.createElement("h1", null, "User Data"),
            React.createElement("p", null, "This fetches Users data from server"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: "/addUser" }, "Create new")),
            contents);
    };
    FetchUser.prototype.handleDelete = function (id) {
        var _this = this;
        if (!window.confirm("Do you want to delete user with Id: " + id))
            return;
        else {
            fetch('api/User/Delete/' + id, {
                method: 'delete'
            }).then(function (data) {
                _this.setState({
                    userList: _this.state.userList.filter(function (rec) {
                        return (rec.userId != id);
                    })
                });
            });
        }
    };
    FetchUser.prototype.handleEdit = function (id) {
        this.props.history.push("/User/edit/" + id);
    };
    FetchUser.prototype.renderUserTable = function (UserList) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null),
                    React.createElement("th", null, "User id"),
                    React.createElement("th", null, "Emri"),
                    React.createElement("th", null, "Mbiemri"),
                    React.createElement("th", null, "Email Adresa"),
                    React.createElement("th", null, "Numri i telefonit"),
                    React.createElement("th", null, "Qyteti"))),
            React.createElement("tbody", null, UserList.map(function (user) {
                return React.createElement("tr", { key: user.userId },
                    React.createElement("td", null),
                    React.createElement("td", null, user.userId),
                    React.createElement("td", null, user.emri),
                    React.createElement("td", null, user.mbiemri),
                    React.createElement("td", null, user.emailAddress),
                    React.createElement("td", null, user.phoneNumber),
                    React.createElement("td", null, user.qyteti),
                    React.createElement("td", null,
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleEdit(user.userId); } }, "Edit"),
                        "  |",
                        React.createElement("a", { className: "action", onClick: function (id) { return _this.handleDelete(user.userId); } }, "Delete")));
            })));
    };
    return FetchUser;
}(React.Component));
exports.FetchUser = FetchUser;
var UserData = /** @class */ (function () {
    function UserData() {
        this.userId = 0;
        this.emri = "";
        this.mbiemri = "";
        this.emailAddress = "";
        this.phoneNumber = "";
        this.qyteti = "";
    }
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=fetchRegularUsers.js.map