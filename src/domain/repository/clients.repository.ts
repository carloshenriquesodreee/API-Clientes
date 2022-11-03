import { IClientEntity } from "../entities/client.entity";

export interface IClientsRepository {
    readById(resourceId: number): Promise<IClientEntity | undefined>,
    create(resource: IClientEntity): Promise<IClientEntity>,
    deleteById(resourceId: number): Promise<void>,
    list(): Promise<IClientEntity[]>,
    updateById(resource: IClientEntity): Promise<IClientEntity | undefined>
}