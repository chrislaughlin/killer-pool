import React from 'react';
import Logo from "../img/logo.png";

const NewGame = ({
    onStartGame
}) => {
    return (
        <section className="content">
            <div className="logo">
                <img src={Logo} alt="" onClick={onStartGame}/>
            </div>
        </section>

    );
};


export default NewGame;

