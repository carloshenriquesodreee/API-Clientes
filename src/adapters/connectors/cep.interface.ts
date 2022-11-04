import { IAddressesEntity } from '../../domain/entities/addresses.entity';

export interface Cep {
    searchAddress(cep: string): Promise<IAddressesEntity | undefined>;
}