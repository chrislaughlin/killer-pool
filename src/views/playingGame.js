import React from 'react';
import Logo from "../img/logo.png";

const PlayingGame = () => {
    return (
        <section className="content has-players">
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <ul className="row">
                <li data-count="3" className="col-xs-12 col-md-6">Chris</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jonny</li>
                <li data-count="3" className="col-xs-12 col-md-6">Paul</li>
                <li data-count="3" className="col-xs-12 col-md-6">Rory</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jack</li>
                <li data-count="3" className="col-xs-12 col-md-6 current">Chris</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jonny</li>
                <li data-count="3" className="col-xs-12 col-md-6">Paul</li>
                <li data-count="3" className="col-xs-12 col-md-6">Rory</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jack</li>
                <li data-count="3" className="col-xs-12 col-md-6">Chris</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jonny</li>
                <li data-count="3" className="col-xs-12 col-md-6">Paul</li>
                <li data-count="3" className="col-xs-12 col-md-6">Rory</li>
                <li data-count="3" className="col-xs-12 col-md-6">Jack</li>
            </ul>

            <section className="group">
                <a href="" className="btn is-white">Remove<i/></a>
                <a href="" className="btn is-black">Next</a>
                <a href="" className="btn is-white">Add</a>
            </section>
        </section>
    );
};


export default PlayingGame;

