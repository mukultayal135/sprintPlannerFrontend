import React from 'react';

import PropTypes from 'prop-types';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
    const [sprints, setSprints] = React.useState({});
    return<DataContext.Provider value={{sprints, setSprints}}>
        {children}
    </DataContext.Provider>
};