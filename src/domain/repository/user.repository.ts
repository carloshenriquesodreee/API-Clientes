import { IUserEntity } from "../entities/user.entity";

export interface IUserRepository {
    create(resource: IUserEntity): Promise<IUserEntity>,
    readByWhere(email: string, password: string): Promise<IUserEntity | undefined>
}
