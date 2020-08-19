import {v4} from "uuid";

export class IdGenerator {
    static generatorId() {
        throw new Error("Method not implemented.");
    }
    public generatorId(): string{
        return v4()
    }
}