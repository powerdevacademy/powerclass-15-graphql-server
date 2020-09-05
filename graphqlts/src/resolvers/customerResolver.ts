import { Customer } from '../entities/Customer';
import { ApolloError } from 'apollo-server-express';
import { getRepository } from 'typeorm';

const customerResolver = {
    Query: {
        customers: () => {
            //a consulta dos customers no banco e devolver um array
            try { 
                return getRepository(Customer).find();
            } catch (e) {
                throw new ApolloError(e);
            }           

        }
    }
}

export default customerResolver;