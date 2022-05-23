import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';


interface FetchRegularUsersDataState {
    userList: UserData[];
    loading: boolean;
}

export class FetchUser extends React.Component<RouteComponentProps<{}>, FetchRegularUsersDataState> {
    constructor(props: any) {
        super(props);
        this.state = { userList: [], loading: true };


        fetch("api/User/Index")
            .then(Response => Response.json() as Promise<UserData[]>)
            .then(data => {
                this.setState({ userList: data, loading: false });
            });

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderUserTable(this.state.userList);
            this.renderUserTable(this.state.userList);
        return <div>
            <h1>User Data</h1>
            <p>This fetches Users data from server</p>
            <p><Link to="/addUser">Create new</Link></p>
            {contents}
        </div>;
    }

    private handleDelete(id: number) {
        if (!window.confirm("Do you want to delete user with Id: " + id))
            return;
        else {
            fetch('api/User/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        userList: this.state.userList.filter((rec) => {
                            return (rec.userId != id);
                        })
                    });
            });
        }
    }
    private handleEdit(id: number) {
        this.props.history.push("/User/edit/" + id);
    }
    private renderUserTable(UserList: UserData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>User id</th>
                    <th>Emri</th>
                    <th>Mbiemri</th>
                    <th>Email Adresa</th>
                    <th>Numri i telefonit</th>
                    <th>Qyteti</th>
                </tr>
            </thead>
            <tbody>
                {UserList.map(user =>
                    <tr key={user.userId}>
                        <td></td>
                        <td>{user.userId}</td>
                        <td>{user.emri}</td>
                        <td>{user.mbiemri}</td>
                        <td>{user.emailAddress}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.qyteti}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(user.userId)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(user.userId)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class UserData {
    userId: number= 0;
    emri: string ="";
    mbiemri: string ="";
    emailAddress: string="";
    phoneNumber: string="";
    qyteti: string="";
}