import React from "react";

function BookHeader({ title, subtitle, authors }) {
    return (
        <div>
            <h4 className="text-start"> {title}</h4>
            <h6 className="text-start"> {subtitle}</h6>
            <p className="text-start">Written by : {authors} </p>
        </div>
    );
}

export default BookHeader;