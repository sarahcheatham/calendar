import React from 'react';

const Header = (props) => {
   const userName = props.users.map(user=> user.username);
    return (
        <header id="calhead">
            <span>{userName}'s Calendar</span>
        </header>
    )
}

export default Header;