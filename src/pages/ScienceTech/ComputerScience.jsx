import React from 'react';
import List from '../../components/List';

function ComputerScience() {
    const { params } = this.props.match;

    return (
        <>
        <h3>{ params.major }</h3>
        <h5>2022</h5>
        <List />
        </>
    );
}

export default ComputerScience;