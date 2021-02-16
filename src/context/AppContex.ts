import { createContext } from 'react';

import { ContextDefaultValue } from '../shared/interfaces/globalInterfaces';

const AppContext = createContext<ContextDefaultValue | null>(null);

export default AppContext;

