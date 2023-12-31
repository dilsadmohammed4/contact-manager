import React from "react";
import {Link} from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <>
            <div className="landing">
                <div className="wrapper">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center h-100">
                        <h1 className="display-1">Contact Manager App</h1>
                        <div>
                            <Link to={'/contacts/admin'}>
                                <button className="btn btn-dark">View Contacts</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
