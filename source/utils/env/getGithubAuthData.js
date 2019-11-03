import { ValidationError } from '../errors';

export const getGithubAuthData = () => {
    const { GITHUB_ID, GITHUB_SECRET } = process.env;

    if (!GITHUB_ID || !GITHUB_SECRET) {
        throw new ValidationError(
            'GITHUB_ID, GITHUB_SECRET should be specified',
            500,
        );
    }

    return { GITHUB_ID, GITHUB_SECRET };
};
