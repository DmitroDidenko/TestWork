import React, {Component} from 'react';
import data from './data'
import bit from './img/bitcoin.png';
import eth from './img/ethereum.png';
import lit from './img/litecoin.png';
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
                            <div className="cards__card cards__one">
                                <div className="card__course">
                                    <p className="cards__text">Ethereum</p>
                                    <img className='img course__img' src={eth} alt="ethereum"/>
                                </div>
                                <div className="info">
                                    <p className='info__text info__pr'>Price:</p>
                                    <span className="info__price">{data.changes.percent.month_6}</span>
                                    <p className='info__text info__pr'>Change</p>
                                    <span className="info__price">{data.changes.price.month_6}</span>
                                    <p className='info__text'>Hour change</p>
                                    <span className="info__price">{data.open.hour}</span>
                                    <p className='info__text'>Day change</p>
                                    <span className="info__price">{data.open.day}</span>
                                    <p className='info__text'>Week change</p>
                                    <span className="info__price">{data.open.week}</span>
                                    <p className='info__text'>Month change</p>
                                    <span className="info__price">{data.open.month}</span>
                                </div>
                            </div>

                            <div className="cards__card cards__two">
                                <div className="card__course">
                                    <p className="cards__text">Litecoin</p>
                                    <img className='img' src={lit} alt="litecoin"/>
                                </div>
                                <div className="info">
                                    <p className='info__text info__pr'>Price:</p>
                                    <span className="info__price">{data.changes.percent.month_6}</span>
                                    <p className='info__text info__pr'>Change</p>
                                    <span className="info__price">{data.changes.price.month_6}</span>
                                    <p className='info__text'>Hour change</p>
                                    <span className="info__price">{data.open.hour}</span>
                                    <p className='info__text'>Day change</p>
                                    <span className="info__price">{data.open.day}</span>
                                    <p className='info__text'>Week change</p>
                                    <span className="info__price">{data.open.week}</span>
                                    <p className='info__text'>Month change</p>
                                    <span className="info__price">{data.open.month}</span>
                                </div>
                            </div>

                            <div className="cards__card cards__three">
                                <div className="card__course">
                                    <p className="cards__text">Bitcoin</p>
                                    <img className='img' src={bit} alt="bitcoin"/>
                                </div>
                                <div className="info">
                                    <p className='info__text'>Price:</p>
                                    <span className="info__price info__pr">{data.changes.percent.month_6}</span>
                                    <p className='info__text'>Change</p>
                                    <span className="info__price info__pr">{data.changes.price.month_6}</span>
                                    <p className='info__text'>Hour change</p>
                                    <span className="info__price">{data.open.hour}</span>
                                    <p className='info__text'>Day change</p>
                                    <span className="info__price">{data.open.day}</span>
                                    <p className='info__text'>Week change</p>
                                    <span className="info__price">{data.open.week}</span>
                                    <p className='info__text'>Month change</p>
                                    <span className="info__price">{data.open.month}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>
            </div>
        );
    }
}

export default App;
