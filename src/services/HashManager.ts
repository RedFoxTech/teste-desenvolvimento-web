import * as bcrypt from "bcryptjs";

export class HashManager {
    public async hash(text: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(text, salt)

        return hash
    }

    public async compare(text: string, hash: string): Promise<boolean>{
        const result = await bcrypt.compare(text, hash)

        return result
    }
}