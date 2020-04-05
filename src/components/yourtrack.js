import React from 'react';

const YourTrack = (props) =>{
    return (
        <div className='container'>
            <div id='gap'>
                Your Tracks
            </div>
            <div id='table'>
                <table class="table">
                    <tr>
                        <th scope="col">
                            Track Name
                        </th>
                        <th scope="col">
                            Start from
                        </th>
                        <th scope="col">
                            Status
                        </th>
                    </tr>
                    <td scope="col">
                    Full-Stack Web Development - November 2019
                    </td>
                    <td scope="col">
                    Nov 25, 2019 8:00 PM
                    </td>
                    <td scope="col">
                        ISA offered
                    </td>
                </table>
            </div>
    </div>
    )
}

export default YourTrack;