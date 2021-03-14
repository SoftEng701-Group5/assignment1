import React from 'react';
import Button from "../components/global/Button";

function homeView() {
    return (
        <div>
            <Button text={"Dashboard"} path={"/home"}/>
        </div>
    );
}

export default homeView;