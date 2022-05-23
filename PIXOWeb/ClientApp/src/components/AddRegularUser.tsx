import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { FetchUser, UserData } from './fetchRegularUsers';

interface AddRegularUserDataState {
    title: string;
    loading: boolean;
    cityList: Array<any>;
    userData: UserData;
}
export class AddRegularUser extends React.Component<RouteComponentProps<{}>, AddRegularUserDataState> {
    constructor(props: any) {
        super(props);

        this.state = { title: "", loading: true, cityList: [], userData: new UserData };

        fetch("api/User/GetListaQyteteve")
            .then(response => response.json() as Promise<Array<any>>)
            .then(data => {
                this.setState({ cityList: data });
            });

        var userId = 1;
        //var userId = this.props.match.params["userId"];

        // This will set state for Edit employee  
        if (userId > 0) {
            fetch('api/User/Details/' + userId)
                .then(response => response.json() as Promise<UserData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, userData: data });
                });
        }

        // This will set state for Add employee  
        else {
            this.state = { title: "Create", loading: false, cityList: [], userData: new UserData };
        }

        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.cityList);

        return <div>
            <h1>{this.state.title}</h1>
            <h3>User</h3>
            <hr />
            {contents}
        </div>;
    }
    private handleSave(event: any) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit user.  
        if (this.state.userData.userId) {
            fetch('api/User/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchregularuser");
                })
        }
        // POST request for Add employee.  
        else {
            fetch('api/User/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchregularuser");
                })
        }
    }
    private handleCancel() {
        this.props.history.push("/fetchregularuser");
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm(cityList: Array<any>) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="userId" value={this.state.userData.userId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Emri">Emri</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="emri" defaultValue={this.state.userData.emri} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Mbiemri">Mbiemri</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="mbiemri" defaultValue={this.state.userData.mbiemri }required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Email" >Email adresa</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="email" defaultValue={this.state.userData.emailAddress} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="phoneNumber" >Numri i telefonit</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="phonenumber" defaultValue={this.state.userData.phoneNumber} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="City">Qyteti</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="City" defaultValue={this.state.userData.qyteti} required>
                            <option value="">-- Zgjedh Qytetin --</option>
                            {cityList.map(city =>
                                <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
}