import { IAddressesEntity } from '../../../domain/entities/addresses.entity';
import { Cep } from '../../../adapters/connectors/cep.interface';
import fetch from "node-fetch";

export class ApiCep implements Cep {
    public async searchAddress(cep: string): Promise<IAddressesEntity | undefined> {
        try{
            const responseCep = await fetch(`https://cdn.apicep.com/file/apicep/${cep.slice(0, 5)}-${cep.slice(5, 8)}.json`);
            
            if(responseCep.status != 200)
                return;

            const dateCep = await responseCep.json();

            return {
                cep: dateCep.code,
                logradouro: dateCep.addresses,
                bairro: dateCep.district,
                cidade: dateCep.city,
                estado: dateCep.state
            };
        } catch(error) {
            return;
        }
    }
}