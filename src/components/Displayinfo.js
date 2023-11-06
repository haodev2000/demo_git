import React from "react";

class Displayinfo extends React.Component {

    render() {

        const { listUser } = this.props;

        console.log(listUser);
        return (
            <div>
                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            Name : {user.name}
                        </div>
                    )

                })}

            </div>
        )
    }

}

export default Displayinfo;