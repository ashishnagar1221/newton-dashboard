import React from 'react';
import NewtonHead from './header';
import Profile from './profile';
import Track from './track';


class Newton extends React.Component{
    render()
    {
        return (
            <div className='contain'>
            <NewtonHead/>
            <Profile/>
            <Track/>
            </div>
        )
    }
}


export default Newton;