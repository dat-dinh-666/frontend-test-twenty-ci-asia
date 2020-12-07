import React from "react";
import PropTypes from "prop-types";

export default function InputField(props) {
    const { name, id, label, isRequired, placeholder, type } = props;
    return (
        <div className="mb-4">
            <label className="block mb-2 font-semibold" htmlFor={id}>
                {label}
            </label>
            <input
                className="input w-full"
                type={type}
                id={id}
                name={name}
                required={isRequired}
                placeholder={placeholder}
            />
        </div>
    );
}

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    isRequired: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
};

InputField.defaultProps = {
    isRequired: false,
    placeholder: "..."
};
