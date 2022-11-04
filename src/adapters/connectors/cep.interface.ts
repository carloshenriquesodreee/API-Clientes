import { IAddressEntity } from '../../domain/entities/address.entity';

export interface Cep {
    searchAddress(cep: string): Promise<IAddressEntity | undefined>;
}