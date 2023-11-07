import React from "react";

class AddUser extends React.Component {
    state = {
        name: "",
        age: "",
        address: "Vung Tau"
    }

    handeOnChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handeOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handOnSubmit = (event) => {
        event.preventDefault();

        this.props.handleAddUser({
            id: Math.floor(Math.random() * 10) + 1 + "radom",
            name: this.state.name,
            age: this.state.age
        })
    }

    render() {
        return (
            <div>
                Tên : {this.state.name}
                <br />
                Tuổi : {this.state.age}
                <br />
                Đại chỉ : {this.state.address}
                <br />


                <form onSubmit={(event) => { this.handOnSubmit(event) }}>
                    < input
                        value={this.state.name}
                        type='text'
                        onChange={(event) => { this.handeOnChange(event) }}
                    />
                    < input
                        value={this.state.age}
                        type='text'
                        onChange={(event) => { this.handeOnChangeAge(event) }}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default AddUser;