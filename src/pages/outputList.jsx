import React from 'react';
import Header from '../components/Header';
import ListView from '../components/ListView';

export default function OutputList({sprints, developers}) {
    console.log(developers);
    return (
        <React.Fragment>
            <Header/>
            <ListView sprints={sprints} developers={developers} />
        </React.Fragment>
    )
}