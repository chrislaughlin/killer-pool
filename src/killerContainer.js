import React, { Component } from "react";

const LIVES = 3;
class KillerContainer extends Component {
  state = {
    players: [],
    currentPlayerIndex: null
  };

  _playerName = null;

  addNewPlayer = () => {
    this.setState(
      oldState => {
        return {
          players: [
            ...oldState.players,
            {
              name: this._playerName.value,
              lives: LIVES
            }
          ]
        };
      },
      () => {
        this._playerName.value = "";
      }
    );
  };

  render() {
    const { currentPlayerIndex, players } = this.state;

    const currentPlayerName = players[currentPlayerIndex]
      ? players[currentPlayerIndex].name
      : "Waiting for game to start!";
    return (
      <div>
        <h1>Current Player: {currentPlayerName}</h1>
        <h2>Players:</h2>
        <ul>
          {players.map((player, index) => {
            const isCurrentPlayer = currentPlayerIndex === index;
            return (
              <li>{`NAME:  ${player.name} - LIVES: ${player.lives} ${
                isCurrentPlayer ? "*" : ""
              }`}</li>
            );
          })}
        </ul>
        {currentPlayerIndex === null && (
          <div>
            <input
              ref={el => (this._playerName = el)}
              placeholder="Player Name"
            />
            <button onClick={this.addNewPlayer}>ADD</button>
          </div>
        )}
        <div>
          {currentPlayerIndex === null && (
            <button onClick={() => this.setState({ currentPlayerIndex: 0 })}>
              Start Game
            </button>
          )}
          {currentPlayerIndex !== null && (
            <div>
              <button
                onClick={() => {
                  this.setState(oldState => {
                    return {
                      currentPlayerIndex:
                        oldState.currentPlayerIndex ===
                        oldState.players.length - 1
                          ? 0
                          : oldState.currentPlayerIndex + 1
                    };
                  });
                }}
              >
                Next Player
              </button>
              <button
                onClick={() => {
                  this.setState(oldState => {
                    return {
                      players: oldState.players.map((player, index) => {
                        return {
                          ...player,
                          lives:
                            index === currentPlayerIndex
                              ? player.lives - 1
                              : player.lives
                        };
                      })
                    };
                  });
                }}
              >
                Take Life
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default KillerContainer;
