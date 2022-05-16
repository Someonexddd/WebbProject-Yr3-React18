import { React, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../../App.css'

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
        <div className='profile-contain-container ms-auto me-auto'>
          <h1>Profile</h1>
          <div className='profile-container ms-auto me-auto'>
            <img src={user.picture} alt={user.name} />
            <h2>Username: {user.name}</h2>
            <p>Nickname: {user.nickname}</p>
            <p>Name: {user.name}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>Username: {user.name}</h2>
          <p>Nickname: {user.nickname}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
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