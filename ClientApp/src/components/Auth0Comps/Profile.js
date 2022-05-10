import {React, useEffect, useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';

const Profile = () => {

    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const [userRoles, setUserRoles] = useState(null);
    
    useEffect(() => {
        const getUserRoles = async () => {
          const domain = "northendrecords.eu.auth0.com";
      
          try {
            const accessToken = await getAccessTokenSilently({
              audience: `https://${domain}/api/v2/`,
              scope: " read:users read:roles read:role_members ",
            });
      
            const userRolesByIdUrl = `https://${domain}/api/v2/users/${user.sub}/roles`;
      
            const metadataResponse = await fetch(userRolesByIdUrl, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            });
      
            const { UserRoles } = await metadataResponse.json();
      
            setUserRoles(UserRoles);
          } catch (e) {
            console.log(e.message);
          }
        };
      
        getUserRoles();
      }, [getAccessTokenSilently, user?.sub]);

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    if (isAuthenticated) {
        if (user.name === user.email) {
            return (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.sub}</p>
                    <p>{userRoles}</p>
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
                    <p>{user.sub}</p>
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