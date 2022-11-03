import { Cep } from './cep.interface';
import { IAddressEntity } from '../../domain/entities/andress.entity';

export abstract class CepFactory {
    public abstract factoryMethod(): Cep;

    public fillAddress(cep: string): Promise<IAddressEntity | undefined> {
        const cepProvider = this.factoryMethod();

        return cepProvider.searchAddress(cep);
    }
}