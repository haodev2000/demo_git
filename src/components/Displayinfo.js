import React from "react";

class Displayinfo extends React.Component {

    state = {
        showhideList: true
    }

    showhideListUser = () => {
        this.setState({
            showhideList: !this.state.showhideList
        })
    }


    render() {

        const { listUser } = this.props;

        console.log(listUser);
        return (

            <div>

                <div>
                    <span onClick={() => { this.showhideListUser() }}>

                        {this.state.showhideList ? "Hide List" : "Show List"}
                    </span>
                </div>

                {this.state.showhideList &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={(+user.age > 18) ? "red" : "green"}>
                                    Name : {user.name}<br />
                                    Age : {user.age}
                                    <hr />
                                </div>
                            )
                        })}

                    </div>
                }

            </div>
        )
    }

}

export default Displayinfo;