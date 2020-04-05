import React from 'react';
import NewtonHead from './header';
import Profile from './profile';
import Track from './track';
import YourTrack from './yourtrack';
import Moretrack from './moretrack';


class Newton extends React.Component{
    render()
    {
        return (
            <div className='contain'>
            <NewtonHead/>
            <Profile/>
            <Track/>
            <YourTrack/>
            <Moretrack/>
            </div>
        )
    }
}


export default Newton;