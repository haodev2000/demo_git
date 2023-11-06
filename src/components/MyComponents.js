import React from "react";
import UserInFo from "./Userinfo";
import Displayinfo from "./Displayinfo";
class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Hao", age: 23 },
            { id: 2, name: "Thang", age: 21 },
            { id: 3, name: "Phat", age: 26 },
        ]
    }

    render() {

        return (
            <div>
                <UserInFo />
                <hr></hr>
                <Displayinfo listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;