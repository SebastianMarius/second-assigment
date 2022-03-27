import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';

export default function TableTemplate(props) {
    return (
        <>
            {props.drivers_sorted.map((driver, key) => (
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
                            {driver.firstName}&nbsp;{driver.lastName}
                        </div>
                        <div className='men-photo'></div>
                    </div>

                    <div className='driver-team'>{driver.team}</div>
                    <div className='player-wins'>{driver.number}</div>
                    <div className='player-points'>
                        <div className='icon-left'>
                            <IconButton
                                onClick={() => {
                                    take_out_points(
                                        props.driverData,
                                        props.setDriverData,
                                        driver.number
                                    );
                                }}>
                                <Icon color='primary'>-</Icon>
                            </IconButton>
                        </div>
                        <p> {driver.points}</p>
                        <div className='icon'>
                            <IconButton
                                onClick={() => {
                                    add_some_points(
                                        props.driverData,
                                        props.setDriverData,
                                        driver.number
                                    );
                                }}>
                                <Icon color='primary'>+</Icon>
                            </IconButton>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

const take_out_points = (drivers, setDriverData, driver_number) => {
    let newDrivers = [];

    drivers.map((driver) => {
        if (driver.number == driver_number) {
            let get_points = driver.points;

            if (get_points - 5 < 0) {
                driver.points = 0;
            } else {
                driver.points = get_points - 5;
            }
        }
        newDrivers = [...newDrivers, driver];
    });
    setDriverData(newDrivers);
};

const add_some_points = (drivers, setDriverData, driver_number) => {
    let newDrivers = [];

    drivers.map((driver) => {
        if (driver.number == driver_number) {
            let get_points = driver.points;
            driver.points = get_points + 5;
        }
        newDrivers = [...newDrivers, driver];
    });
    setDriverData(newDrivers);
};
