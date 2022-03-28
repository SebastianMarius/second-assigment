import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function WinnerCard(props) {
    const winner = props.drivers_sorted[0].team;
    const winner_team = props.drivers_sorted.filter((driver) => {
        return driver.team == winner;
    });
    console.log(winner);
    console.log(winner_team);

    console.log(props.drivers_sorted);

    let points = 0;

    winner_team.map((winer) => {
        points = points + winer.points;
    });

    return (
        <>
            <div className='winner_section'>
                <p className='winner-head'>
                    Winner team: {winner} with {points} points
                </p>
                {winner_team.map((driver) => (
                    <div className='winner_card'>
                        {' '}
                        <img src={driver.image} className='driver_photo'></img>
                        <div className='second-column'>
                            {' '}
                            <p>
                                {' '}
                                Name: {driver.firstName}&nbsp;{driver.lastName}
                            </p>
                            <p>Number: {driver.number}</p>
                            <div>
                                {' '}
                                <ReactCountryFlag
                                    countryCode={driver.country}
                                    style={{
                                        width: '4em',
                                        height: '4em',
                                    }}
                                    svg></ReactCountryFlag>{' '}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
