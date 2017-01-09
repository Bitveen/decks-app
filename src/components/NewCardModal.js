import React from 'react';
import CardModal from './CardModal';
import { connect } from 'react-redux';
import { addCard } from '../actions';


const mapStateToProps = (props, { params: { deckId } }) => {
    return {
        card: {
            deckId
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: card => dispatch(addCard(card))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
