import React from 'react';
import Logo from "../img/logo.png";

const NewGame = ({
    onStartGame
}) => {
    return (
        <section className="content">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div className="start">
                <a
                    onClick={onStartGame}
                    className="btn is-black"
                >
                    Start Game
                </a>
            </div>
        </section>

    );
};


export default NewGame;

