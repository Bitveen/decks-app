import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import Toolbar from './Toolbar';
const mapStateToProps = (props, { params: { deckId }}) => {
    return {
        deckId
    };
};


const App = (props) => {
    return (
        <div className='app'>
            <Sidebar />
            <Toolbar deckId={props.deckId} />
            {props.children}
        </div>
    );
};

export default connect(mapStateToProps)(App);
