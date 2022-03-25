import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function TableTemplate(props) {

    const drivers_sorted = props.data.sort((a, b) =>
        a.points < b.points ? 1 : -1
    );

    return (
        <>
            {drivers_sorted.map((driver, key) => (
                <div className='table-body'>
                    <div className='player-count'>{key + 1}</div>
                    <div className='driver-name'>
                        <div className='steag'>
                            <ReactCountryFlag
                                countryCode={driver.country}
                                svg></ReactCountryFlag>
                        </div>
                        <div>
                            {driver.firstName}&nbsp;{driver.lastName}
                        </div>
                        <div className='men-photo'></div>
                    </div>

                    <div className='driver-team'>{driver.team}</div>
                    <div className='player-wins'>{driver.number}</div>
                    <div className='player-points'><button className='buttons-add-take'>-</button>{driver.points} <button className='buttons-add-take right-button'>+</button></div>
                </div>
            ))}
        </>
    );
}
