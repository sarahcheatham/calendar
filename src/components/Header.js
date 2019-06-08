import React from 'react';

const Header = (props) => {
   const userName = props.users.map(user=> user.username);
    return (
        <div id="calhead">
            <span className="icon">date_range</span>
            <span>{userName}'s Calendar</span>
        </div>
    )
}

export default Header;