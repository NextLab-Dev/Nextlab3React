import React from 'react'

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
    ]
    return (
        <div className="container-fluid g-0 statisticsRowContainer">
            <div className="row justify-content-around">
                <div className="col-12 col-xxl-2 statisticsTitle">
                    <h2>Statistics</h2>
                </div>
                {cards.map((card, index) => (
                    <div key={index} className="col-10 col-sm-5 col-lg-2 col-xxl-2 card text-white shadow-lg py-3 my-1">
                        <div className="wrapper">
                            <img src={card.image} alt="Statistics" className="imgContainer" />
                            <div className="descriptionContainer">
                                <p className="descriptionNumber">{card.number}</p>
                                <p className="mb-0">{card.firstText}</p>
                                <p className="mb-0">{card.secondText}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticsRow;
