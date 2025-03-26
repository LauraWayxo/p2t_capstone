import React from 'react'
// import PropTypes from 'prop-types'
import {AppState, Auth0Provider, User} from "@auth0/auth0-react";
import { useCreateMyUser } from '@/api/MyUserApi';

function Auth0ProviderWithNavigation(props: { children: React.ReactNode}) {
    const { createUser } = useCreateMyUser(); 

    const domain = import.meta.env.VITE_AUTH0_DOMAIN; 
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID; 
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL; 

    if (!domain || !clientId || !redirectUri) {
        throw new Error('Unable to initialize auth');
    }

    //redirected to CalEat.com from Auth login
    const onRedirectCallBack = (appState?: AppState, user?: User) => {
        // console.log("USER", user); 
    //initialize call to backend
        if(user?.sub && user?.email) {
            createUser({ auth0Id: user.sub, email: user.email })
        }
    };

    return (
        <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{
            redirect_uri: redirectUri
        }}
        onRedirectCallback={onRedirectCallBack}
        >
        
        { props.children }
        </Auth0Provider>
  );
}

Auth0ProviderWithNavigation.propTypes = {}; 

export default Auth0ProviderWithNavigation
