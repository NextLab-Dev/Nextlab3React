import React from 'react'
// import Typed from "typed.js";
// import { useEffect, useRef } from "react";

const StatisticsRow = () => {
    const cards = [
        {
            image: require('./img/computer.png'),
            number: 4,
            firstText: 'Milion Serbs',
            secondText: 'use a computer'
        },
        {
            image: require('./img/dollar.png'),
            number: 7,
            firstText: 'Billion $ spending',
            secondText: 'on blockchain'
        },
        {
            image: require('./img/token.png'),
            number: 15,
            firstText: 'Thousand tokens',
            secondText: 'currently exist'
        },
        {
            image: require('./img/bitcoin.png'),
            number: 21,
            firstText: 'Million bitcoins',
            secondText: 'exist'
        }
    ];
    // const showCards = cards.map((card, index) => {
    //     return card.number
    // })
    // const typed = new Typed('.descriptionNumber', {
    //     strings: [0, showCards],
    //     typeSpeed: 30
    //   });
    return (
        <div className="container-fluid g-0 statisticsRowContainer">
            <div className="row justify-content-center">
                <div className="col-12 col-xxl-2 statisticsTitle p-0">
                    <h2 className="mb-3 mb-xxl-0">Statistics</h2>
                </div>
                {cards.map((card, index) => (
                    <div key={index} className="col-8 col-sm-4 col-xl-2 card text-white shadow-lg py-3 my-2">
                        <div className="wrapper">
                            <img src={card.image} alt="Statistics" className="imgContainer" />
                            <div className="descriptionContainer">
                                <p className="descriptionNumber">{card.number}</p>
                                <p className="mb-0 descriptionText">{card.firstText}</p>
                                <p className="mb-0 descriptionText">{card.secondText}</p>
                            </div>
                        </div>   
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticsRow;
