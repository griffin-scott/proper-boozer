import PubPreview from "./PubPreview";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const PubsList = () => {
    // Initialize state variables
    const [pubs, setPubs] = useState([]);

    // make api call to 'get' data and store it into state variable
    const getData = async () => {
        const res = await fetch("http://localhost:8000/pubs");
        const data = await res.json();
        console.log(data[0]);
        setPubs(data);
    };

    // useEffect set to only run on initial page load
    useEffect(() => {
        console.log("useEffect ran");
        getData();
    }, []);

    return (
        <div className="PubsList">
            {pubs.map((pub) => (
                <PubPreview pub={pub} />
            ))}

            {/* <ul>
                {pubs.map((post) => (
                    <div className="col-8 mb-5 ps-3 mx-auto border rounded">
                        <h1 className="display-5 text-white">{post.title}</h1>
                        <p className="lead text-white">{post.body}</p>
                    </div>
                ))}
            </ul> */}
        </div>
    );
};

export default PubsList;
