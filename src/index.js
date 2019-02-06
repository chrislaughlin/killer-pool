import React, {Component} from "react";
import ReactDOM from "react-dom";

import './css/build.min.css';

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
        players: [
            {name: 'Chris', lives: 3},
            {name: 'Jonny', lives: 3},
            {name: 'Paul', lives: 3},
            {name: 'Rory', lives: 3},
        ]
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

    getCurrentView = (currentView, players) => {
        switch (currentView) {
            case GAME_STATES.newGame:
                return <NewGame onStartGame={this.onStartGame}/>;
            case GAME_STATES.playingGame:
                return <PlayingGame players={players} addPlayer={this.addPlayer}/>;
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
