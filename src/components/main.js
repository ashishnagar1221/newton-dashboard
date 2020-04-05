import React from 'react';
import NewtonHead from './header';
import Profile from './profile';


class Newton extends React.Component{
    render()
    {
        return (
            <div>
            <NewtonHead/>
            <Profile/>
            </div>
        )
    }
}


export default Newton;