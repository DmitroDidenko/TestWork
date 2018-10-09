import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="container">
                    <section className="main-section">
                        <div className='main-section__header'>
                            <h2 className='header__text'>Select currency to change:</h2>
                            <p className="menu">Course
                                <ul className="sub-menu">
                                    <li className="sub-item-menu">USD</li>
                                    <li className="sub-item-menu">EUR</li>
                                    <li className="sub-item-menu">RUB</li>
                                    <li className="sub-item-menu">GBP</li>
                                </ul>
                            </p>
                        </div>
                        <div className='main-section__cards'>
                            <div className="cards__card-one">
                                <p className="card__text">Ethereum</p>
                                <img src="img/ethereum.png" alt="ethereum"/>
                            </div>
                            <div className="cards__card-two">
                                <p className="card__text">Litecoin</p>
                                <img src="img/litecoin.png" alt="litecoin"/>
                            </div>
                            <div className="cards__card-three">
                                <p className="card__text">Bitcoin</p>
                                <img src="img/bitcoin.png" alt="bitcoin"/>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default App;
