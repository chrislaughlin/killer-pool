import React, { Component } from 'react';
import Logo from "../img/logo.png";

class PlayingGame extends Component {

    state = {
        showInput: false,
        playerName: ''
    };

    _newPlayer = null;

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            this.props.addPlayer(this.state.playerName);
            this.setState({showInput: false, playerName: ''});
        }
    };

    updateInput = evt => {
        this.setState({playerName: evt.target.value});
    };

    render() {
        const {
            players,
            nextPlayer,
            currentPlayerIndex,
            addLife,
            removeLife
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
                            onClick={() => {
                                this.setState({showInput: true})
                                setTimeout(() => {
                                    this._newPlayer.focus();
                                }, 300);
                            }}
                        >
                            Add
                        </button>
                    }

                </section>

                <ul className="row">
                    {
                        playersWithInout.map((player, index) => {
                            if (!player) {
                                return;
                            }
                            if (player.showInput) {
                                return (
                                    <li
                                        className="new-player col-xs-12"
                                    >
                                        <input
                                            className="add-player-name"
                                            value={playerName}
                                            onKeyPress={this.handleKeyPress}
                                            onChange={this.updateInput}
                                            ref={el => this._newPlayer = el}
                                        />
                                    </li>
                                );
                            } else {
                                let className = 'col-xs-12 col-md-6 col-xl-4';
                                className = `${className} ${currentPlayerIndex === index && 'current'}`;
                                className = `${className} ${player.lives === 0 && 'out'}`;
                                return (
                                    <li
                                        data-count={player.lives}
                                        className={className}
                                    >
                                        {player.name}
                                    </li>
                                )
                            }

                        })
                    }
                </ul>

                <section className="group">
                    <button onClick={removeLife} className="btn is-white">-1 life<i/></button>
                    <button onClick={nextPlayer} className="btn is-black">Next</button>
                    <button onClick={addLife} className="btn is-white">+1 life</button>
                </section>
            </section>
        );
    }
};


export default PlayingGame;

