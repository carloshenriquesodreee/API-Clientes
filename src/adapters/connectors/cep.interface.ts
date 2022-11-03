import { IAddressEntity } from '../../domain/entities/andress.entity';

export interface Cep {
    buscaEndereco(cep: string): Promise<IAddressEntity | undefined>;
}