import React from 'react';

const YourTrack = (props) =>{
    return (
        <div className='container'>
            <div>
                Your Tracks
            </div>
            <div>
                <table>
                    <tr>
                        <th>
                            Track Name
                        </th>
                        <th>
                            Start from
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                    <td>
                    Full-Stack Web Development - November 2019
                    </td>
                    <td>
                    Nov 25, 2019 8:00 PM
                    </td>
                    <td>
                        ISA offered
                    </td>
                </table>
            </div>
    </div>
    )
}

export default YourTrack;