import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {

    render() {

        return (
            <div className="App">
                <ul className="list pl0 code">
                    <li > Any live cell with fewer than two live neighbors dies, as if by underpopulation</li>
                        <li>Any live cell with two or three live neighbors lives on to the next generation</li>
                            <li>Any live cell with more than three live neighbors dies, as if by overpopulation</li>
                                <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction</li></ul>
                <Game />
            </div>
        );
    }
}
export default App;
