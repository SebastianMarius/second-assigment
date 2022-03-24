import React from 'react';
import { mockData } from './mockData';
import TableTemplate from './TableTemplate';
import { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';

const callBackFct = (driverData) => {
    // const { firstName } = driverData;
};

export default function HomePage(props) {
    const [driverData, setDriverData] = useState();
    const [driverTop, setDriverTop] = useState([]);

    useEffect(() => {
        setDriverData(mockData);
        // callBackFct(driverData);
        console.log('data' + driverData);
    }, []);

    // console.log(firstName);

    return (
        <>
            <div className='data-card'>
                <div className='table-head'>
                    <div className='player-count'></div>
                    <div className='driver-name'>Driver</div>
                    <div className='driver-team'>Team</div>
                    <div className='player-wins'>Number</div>
                    <div className='player-points'>Points</div>
                </div>

                {driverData ? (
                    <>
                        <>
                            <TableTemplate data={driverData} />
                        </>
                    </>
                ) : (
                    <div></div>
                )}
            </div>
            {console.log(mockData[0])}
        </>
    );
}
