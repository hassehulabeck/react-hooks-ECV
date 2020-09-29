import React from "react";
import ReactDOM from "react-dom";
import { UserContext, User } from "./usercontext";

const Page = () => {
    return (
        <UserContext.Consumer>
            {() => <Userprofile user={User} />}
        </UserContext.Consumer>
    );
};

const Userprofile = (props) => {
    if (props.user.isAdmin) {
        return <p>User {props.user.name} is an admin.</p>;
    } else {
        return (
            <div>
                <p>
                    {props.user.name} has {props.user.credits} credits.
                </p>
            </div>
        );
    }
};

ReactDOM.render(<Page />, document.getElementById("root"));
