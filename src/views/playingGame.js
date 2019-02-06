import React, { Component } from 'react';
import Logo from "../img/logo.png";

class PlayingGame extends Component {

    state = {
        showInput: false,
        playerName: ''
    };

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.props.addPlayer(this.state.playerName);
            this.setState({showInput: false});
        }
    };

    updateInput = evt => {
        this.setState({playerName: evt.target.value});
    };

    render() {
        const {
            players
        } = this.props;

        const {
            showInput,
            playerName
        } = this.state;

        let playersWithInout = [];
        if (showInput) {
            playersWithInout = playersWithInout.concat(
                {showInput: true}
            );
        }
        playersWithInout = playersWithInout.concat(players);
        return (
            <section className="content has-players">
                <div className="logo">
                    <img src={Logo} alt=""/>
                </div>

                <section className="add-player">
                    {
                        !showInput &&
                        <button
                            className="btn is-tertiary"
                            onClick={() => this.setState({showInput: true})}
                        >
                            Add
                        </button>
                    }

                </section>

                <ul className="row">
                    {
                        playersWithInout.map(player => {
                            if (player.showInput) {
                                return (
                                    <input
                                        className="player-add-name"
                                        value={playerName}
                                        onKeyPress={this.handleKeyPress}
                                        onChange={this.updateInput}
                                    />
                                );
                            } else {
                                return (
                                    <li
                                        data-count={player.lives}
                                        className="col-xs-12 col-md-6">
                                        {player.name}
                                    </li>
                                )
                            }

                        })
                    }
                </ul>
                {/*<div>*/}
                {/*<input/>*/}
                {/*<a*/}
                {/*className="btn is-black"*/}
                {/*>*/}
                {/*ADD*/}
                {/*</a>*/}
                {/*</div>*/}

                <section className="group">
                    <a href="" className="btn is-white">Remove<i/></a>
                    <a href="" className="btn is-black">Next</a>
                    <a href="" className="btn is-white">Add</a>
                </section>
            </section>
        );
    }
};


export default PlayingGame;

