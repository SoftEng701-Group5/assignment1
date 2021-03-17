import React  from "react";

function LoginField(props) {
    const {label, type, onChangeHandler} = props;

    return (
        <div className ="login_form">
            <label className="login_label">{label}</label>
                <input className="login_input" type={type} onChange={e => onChangeHandler(e.target.value)}></input>
        </div>
    );
}

export default LoginField;