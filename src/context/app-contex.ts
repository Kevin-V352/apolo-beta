import { createContext } from 'react';

import { ContextDefaultValue } from '../shared/interfaces/global-interfaces';

const AppContext = createContext<ContextDefaultValue | null>(null);

export default AppContext;

