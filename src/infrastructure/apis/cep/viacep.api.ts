import { IAddressEntity } from '../../../domain/entities/andress.entity';
import { Cep } from '../../../adapters/connectors/cep.interface';
import fetch from "node-fetch";

export class ViaCep implements Cep {
    public async searchAddress(cep: string): Promise<IAddressEntity | undefined> {
        try{
            const responseCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
            if(responseCep.status != 200)
                return;
    
            const dateCep = await responseCep.json();
            
            if('erro' in dateCep)
                return;
    
            return {
                cep: dateCep.cep,
                logradouro: dateCep.logradouro,
                complemento: dateCep.complemento,
                bairro: dateCep.bairro,
                cidade: dateCep.localidade,
                estado: dateCep.uf
            };
        } catch(error) {
            return;
        }
    }
        
}