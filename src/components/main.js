import React from 'react';
import NewtonHead from './header';
import Profile from './profile';
import Track from './track';
import YourTrack from './yourtrack';


class Newton extends React.Component{
    render()
    {
        return (
            <div className='contain'>
            <NewtonHead/>
            <Profile/>
            <Track/>
            <YourTrack/>
            </div>
        )
    }
}


export default Newton;