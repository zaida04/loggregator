import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode("TEST_SECRET");
export async function generateJWT(id: string) {
	const gen = new SignJWT({ id });
	gen.setProtectedHeader({ alg: "HS256" });
	gen.setIssuedAt();

	return gen.sign(secret);
}

export async function decodeJWT<Payload extends Record<string, string>>(token: string) {
	const { payload } = await jwtVerify(token, secret);
	return payload as Payload & { iat: number };
}
