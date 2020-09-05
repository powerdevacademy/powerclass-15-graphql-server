import { mergeTypeDefs } from 'graphql-tools';

import test from './test';
import customer from './customer';

export default mergeTypeDefs([
    test,
    customer
])