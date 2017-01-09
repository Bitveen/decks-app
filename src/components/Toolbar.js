import React from 'react';
import { showAddDeck, filterCards } from '../actions';
import { Link } from 'react-router';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {
        showAddDeck: () => dispatch(showAddDeck()),
        onFilter: (query) => dispatch(filterCards(query))
    };
};



const Toolbar = ({ showAddDeck, deckId, onFilter }) => {

    let deckTools = deckId ? (
        <div>
            <Link to={`/deck/${deckId}/new`}>New Card</Link>
            <Link to={`/deck/${deckId}/study`}>Study Deck</Link>
        </div>
        <input type='text' onChange={e => onFilter(e.target.value)} />
    ) : null;



    return (
        <div>
            {deckTools}
            <button onClick={showAddDeck}>New Deck</button>

        </div>
    );
};

export default connect(null, mapDispatchToProps)(Toolbar);
