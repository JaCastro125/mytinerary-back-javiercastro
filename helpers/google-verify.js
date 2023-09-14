import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();

export async function verify(token_id) {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token_id,
            audience: process.env.GOOGLE_ID
        });

        const payload = ticket.getPayload();

        return Promise.resolve({
            name: payload.name,
            email: payload.email,
            image: payload.picture
        });
    } catch (error) {
        return Promise.reject(error);
    }
}
