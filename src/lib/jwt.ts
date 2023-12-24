import { SignJWT } from 'jose';

const secret = new TextEncoder().encode('TEST_SECRET');
export async function generateJWT(id: string) {
    const gen = new SignJWT({ id });
    gen.setProtectedHeader({ alg: 'HS256' });
    gen.setIssuedAt();

    return gen.sign(secret);
}
