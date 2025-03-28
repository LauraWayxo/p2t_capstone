import React from 'react'
// import PropTypes from 'prop-types'
import {AppState, Auth0Provider, User} from "@auth0/auth0-react";
import { useCreateMyUser } from './api/MyUserApi';
import { useNavigate } from 'react-router-dom';

function Auth0ProviderWithNavigation(props: { children: React.ReactNode}) {
    const navigate = useNavigate();

    const domain = import.meta.env.VITE_AUTH0_DOMAIN; 
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID; 
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL; 
    const audience = import.meta.env.VITE_AUTH0_AUDIENCE; 

    if (!domain || !clientId || !redirectUri) {
        throw new Error('Unable to initialize auth');
    }

    //redirected to CalEat.com from Auth login
    const onRedirectCallBack = {/*(appState?: AppState, user?: User)*/} => {
        console.log("User", user); 
    //initialize call to backend
        navigate("/auth-callback");
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

// Auth0ProviderWithNavigation.propTypes = {}; 

export default Auth0ProviderWithNavigation;
