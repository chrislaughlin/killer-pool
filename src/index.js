import React, {Component} from "react";
import ReactDOM from "react-dom";

import './css/build.css';
import './css/more.css';

import KillerContainer from "./killerContainer";
import NewGame from './views/newGame';
import PlayingGame from './views/playingGame';

const GAME_STATES = {
    newGame: 'NEW_GAME',
    addPlayers: 'ADD_PLAYERS',
    playingGame: 'PLAYING_GAMES'
};


class App extends Component {

    state = {
        currentView: GAME_STATES.newGame,
        players: [],
        currentPlayerIndex: 0
    };

    onStartGame = () => this.setState({currentView: GAME_STATES.playingGame});

    addPlayer = name => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name,
                    lives: 3
                }
            ]
        })
    };

    nextPlayer = () => {
        this.setState(oldState => {
            return {
                currentPlayerIndex:
                    oldState.currentPlayerIndex ===
                    oldState.players.length - 1
                        ? 0
                        : oldState.players[oldState.currentPlayerIndex + 1].lives === 0 ?
                        oldState.currentPlayerIndex + 2 :
                        oldState.currentPlayerIndex + 1
            };
        });
    };

    addLife = () => {
        this.setState(oldState => {
            return {
                players: oldState.players.map((player, index) => {
                    if (index === oldState.currentPlayerIndex) {
                        return {
                            ...player,
                            lives: player.lives + 1
                        }
                    } else {
                        return player;
                    }
                })
            }
        })
    };

    removeLife = () => {
        this.setState(oldState => {
            return {
                players: oldState.players.map((player, index) => {
                    if (index === oldState.currentPlayerIndex) {
                        return {
                            ...player,
                            lives: player.lives !== 0 ? player.lives - 1 : 0
                        }
                    } else {
                        return player;
                    }
                })
            }
        })
    };

    getCurrentView = (currentView, players) => {
        switch (currentView) {
            case GAME_STATES.newGame:
                return <NewGame onStartGame={this.onStartGame}/>;
            case GAME_STATES.playingGame:
                return (
                    <PlayingGame
                        players={players}
                        addPlayer={this.addPlayer}
                        nextPlayer={this.nextPlayer}
                        currentPlayerIndex={this.state.currentPlayerIndex}
                        addLife={this.addLife}
                        removeLife={this.removeLife}
                    />
                );
        }
    };



    render() {
        const {
            currentView,
            players
        } = this.state;

        return (
            <div className="App">
                <section className="killer">
                    {/* Pockets */}
                    <span className="pocket top-left"/>
                    <span className="pocket top-right"/>
                    <span className="pocket bottom-left"/>
                    <span className="pocket bottom-right"/>
                    <span className="pocket middle-left"/>
                    <span className="pocket middle-right"/>
                    <span className="break-line"/>

                        {
                            this.getCurrentView(currentView, players)
                        }
                </section>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
