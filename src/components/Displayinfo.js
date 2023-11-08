import React from "react";
import "./Display.scss"
import logo from "../logo.svg"

class Displayinfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showhideList: true
        }
    }

    showhideListUser = () => {
        this.setState({
            showhideList: !this.state.showhideList
        })
    }


    componentDidMount() {
        setTimeout(() => {
            document.title = "Hao Annie";
        }, 3000);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert("List user has 5")
            }
        }

    }

    render() {

        const { listUser } = this.props;

        console.log(listUser);
        return (

            <div className="display-info">
                {/* <img className="logo" src={logo} /> */}
                <br />
                <div>
                    <span onClick={() => { this.showhideListUser() }}>

                        {this.state.showhideList ? "Hide List" : "Show List"}
                    </span>
                </div>

                {this.state.showhideList &&
                    <>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={(+user.age > 18) ? "red" : "green"}>
                                    <div>
                                        Name : {user.name}<br />
                                        Age : {user.age}

                                    </div>

                                    <hr />

                                    <div>
                                        <button onClick={() => this.props.handleDeleteUserUser(user.id)}>Delete</button>
                                    </div>

                                </div>


                            )
                        })}

                    </>
                }



            </div>
        )
    }

}

export default Displayinfo;