import React from 'react';

import { UserProvider } from './user';
import { MediaProvider } from './media';

const AppProvider: React.FC = ({ children }) => (
    <UserProvider>
        <MediaProvider>{children}</MediaProvider>
    </UserProvider>
);

export default AppProvider;
