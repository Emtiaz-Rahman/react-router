import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Hello friend how are You?</h1>
            <p>Parle kico taka der dis..{friends.length}</p>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;