import React from "react";
import {connect} from 'react-redux'

function UserMenu({links}) {
    if (links) {
        return (
            <ul>
                {links.map(item => {
                    return <li key={item.link}><a href={item.link}>{item.text}</a></li>
                })}
            </ul>
        );
    } else {
        return [];
    }
}

export default connect((state = {}) => {
    return {
        links: state.links
    }
})(UserMenu);