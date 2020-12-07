import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_HOME } from "../../../constants/routes";

export default function Logo(props) {
    return (
        <Link to={ROUTE_HOME}>
            <div className="text-2xl">Logo</div>
        </Link>
    );
}
