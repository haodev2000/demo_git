import React from "react";
import AddUser from "./AddUser";
import Displayinfo from "./Displayinfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hao", age: 17 },
            { id: 2, name: "Thang", age: 21 },
            { id: 3, name: "Phat", age: 26 },
        ]
    }

    handleAddUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })

    }

    handleDeleteUser = (userID) => {
        let listUserClone = this.state.listUser;

        listUserClone = listUserClone.filter(item => item.id !== userID);

        this.setState({
            listUser: listUserClone
        })
    }

    render() {

        return (
            <>
                <div>
                    <AddUser handleAddUser={this.handleAddUser} />
                    <hr></hr>
                    <Displayinfo listUser={this.state.listUser}
                        handleDeleteUserUser={this.handleDeleteUser}
                    />
                </div>
            </>
        );
    }
}

export default MyComponent;