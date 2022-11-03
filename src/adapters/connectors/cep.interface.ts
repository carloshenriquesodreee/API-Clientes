import { IAddressEntity } from '../../domain/entities/andress.entity';

export interface Cep {
    searchAddress(cep: string): Promise<IAddressEntity | undefined>;
}