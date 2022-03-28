import React from 'react';
import { mockData } from './mockData';
import TableTemplate from './TableTemplate';
import { useState, useEffect } from 'react';
import WinnerCard from './WinnerCard';

export default function HomePage(props) {
    const [driverData, setDriverData] = useState([]);

    useEffect(() => {
        setDriverData(mockData);
        console.log(driverData);
    }, [driverData]);

    let drivers_sorted;

    if (driverData) {
        drivers_sorted = drivers_points_sorted(driverData);
    }

    return (
        <>
            <div className='data-card'>
                <div className='table-head'>
                    <div className='player-count'></div>
                    <div className='driver-name'>Driver</div>
                    <div className='driver-team'>Team</div>
                    <div className='player-wins'>Number</div>
                    <div className='player-points'>
                        <p>Points</p>
                    </div>
                </div>

                {driverData && (
                    <>
                        <TableTemplate
                            drivers_sorted={drivers_sorted}
                            setDriverData={setDriverData}
                            driverData={driverData}
                        />
                    </>
                )}
            </div>

            {drivers_sorted[0] && (
                <WinnerCard drivers_sorted={drivers_sorted} />
            )}

            {console.log(mockData[0])}
        </>
    );
}

const drivers_points_sorted = (drivers) => {
    const drivers_sorted = drivers.sort((a, b) =>
        a.points < b.points ? 1 : -1
    );

    return drivers_sorted;
};
