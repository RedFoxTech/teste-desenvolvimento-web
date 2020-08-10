import * as jwt from "jsonwebtoken";

export class Authenticator {
    private static getExpiresIn(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generationToken(
        data: AuthenticationData,
        expiresIn: string = process.env.ACCESS_TOKEN_EXPIRES_IN!
    ): string {
        const token = jwt.sign(
            data,
            process.env.JWT_KEY as string,
            { expiresIn }
        )
        return token
    }

    public verify(token: string): AuthenticationData {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any
        const result = {
            id: payload.id,
            role: payload.role
        }
        return result
    }
}

interface AuthenticationData {
    id: string
    role?: string
}