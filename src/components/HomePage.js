import React from 'react';
import { mockData } from './mockData';
import TableTemplate from './TableTemplate';
import { useState, useEffect } from 'react';

export default function HomePage(props) {
    const [driverData, setDriverData] = useState();

    useEffect(() => {
        setDriverData(mockData);

        console.log('data' + driverData);
    }, []);

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
                        <TableTemplate data={driverData} />
                    </>
                ) : (
                    <div></div>
                )}
            </div>
            {console.log(mockData[0])}
        </>
    );
}
