import { Cep } from './cep.interface';
import { IAddressesEntity } from '../../domain/entities/addresses.entity';

export abstract class CepFactory {
    public abstract factoryMethod(): Cep;

    public fillAddress(cep: string): Promise<IAddressesEntity | undefined> {
        const cepProvider = this.factoryMethod();

        return cepProvider.searchAddress(cep);
    }
}