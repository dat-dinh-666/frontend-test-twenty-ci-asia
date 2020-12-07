import React from "react";
import { Link } from "react-router-dom";
import { ROUTE_CREATE_POST } from "../../../constants/routes";

export default function CreatePost() {
    return (
        <Link
            to={ROUTE_CREATE_POST}
            className="shadow-lg rounded-lg overflow-hidden transform-gpu hover:-translate-y-1 transition"
        >
            <div className="w-full h-full flex justify-center items-center text-lg p-4">
                <div className="text-9xl text-blue-800">+</div>
            </div>
        </Link>
    );
}
