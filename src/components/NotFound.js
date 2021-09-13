import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container ">
            <div className="row vh-100 align-items-center justify-content-center">
                <div className="col-md-12">
                    <div className="text-center">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to = '/' className="btn btn-primary btn-lg mt-3">Take Me Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;