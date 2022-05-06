import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';

const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (isAuthenticated) {
        if (user.name === user.email) {
            return (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <JSONPretty data={user} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <JSONPretty data={user} />
                </div>
            )
        }

    }
    return (
        <div>
            Not logged in
        </div>
    )
}

export default Profile