import { getGithubAuthData } from './env';

import { Strategy } from 'passport-github2';
const authData = getGithubAuthData();

export const githubStrategy = new Strategy(
    {
        clientID: authData.GITHUB_ID,
        clientSecret: authData.GITHUB_SECRET,
        callbackURL: 'http://localhost:3000/users',
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    },
);
