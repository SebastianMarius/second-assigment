import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const drivers_points_sorted = (drivers) => {
    const drivers_sorted = drivers.sort((a, b) =>
        a.points < b.points ? 1 : -1
    );
    const a = 20;
    return drivers_sorted;
};

export default function TableTemplate(props) {
    const driver_data = drivers_points_sorted(props.data);

    return (
        <>
            {driver_data.map((driver, key) => (
                <div className='table-body'>
                    <div className='player-count'>{key + 1}</div>
                    <div className='driver-name'>
                        <div className='steag'>
                            <ReactCountryFlag
                                key={driver.country}
                                countryCode={driver.country}
                                svg></ReactCountryFlag>
                        </div>
                        <div>
                            {/* = useContext(second) */}
                            {driver.firstName}&nbsp;{driver.lastName}
                        </div>
                        <div className='men-photo'></div>
                    </div>

                    <div className='driver-team'>{driver.team}</div>
                    <div className='player-wins'>{driver.number}</div>
                    <div className='player-points'>
                        <button className='buttons-add-take'>-</button>
                        {driver.points}{' '}
                        <button className='buttons-add-take right-button'>
                            +
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}
