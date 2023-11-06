import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Hao",
        age: 26,
        address: "Vung Tau"
    }

    clickMe = (event) => {
        console.log(event);
        console.log("Name :", this.state.name);

        this.setState({
            name: "Phat"
        })
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
        console.log(this.state);
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

                <button onClick={(event) => { this.clickMe(event) }}>Click Me</button>

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
        );
    }
}

export default MyComponent;