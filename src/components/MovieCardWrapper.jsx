import React from "react";


export default function MovieCardWrapper({children}) {
    return (
        <div className="page-single">
            <div className="container">
                <div className="row ipad-width">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
                        <div className="flex-wrap-movielist">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}