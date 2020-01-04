// method that can take anything -> strings, integers, objects, functions, arrays, etc.
// used to pull and store values that we want in our components
import { createContext } from 'react';

import SHOP_DATA from './shop.data';
// create new contexts with CollectionsContext that stores this shop data
// will be the initial value of our context
const CollectionsContext = createContext(SHOP_DATA)

export default CollectionsContext;
