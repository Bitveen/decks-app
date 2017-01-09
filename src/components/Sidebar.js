import React from 'react';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
import { Link } from 'react-router';


const mapStateToProps = (state) => {
    return {
        decks: state.decks,
        addingDeck: state.addingDeck
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDeck: name => dispatch(addDeck(name)),
        showAddDeck: () => dispatch(showAddDeck()),
        hideAddDeck: () => dispatch(hideAddDeck())
    };
};



class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.createDeck = this.createDeck.bind(this);
    }

    componentDidUpdate() {
        let el = this.refs.add;
        if (el) {
            el.focus();
        }
    }

    createDeck(e) {
        if (e.which !== 13) {
            return;
        }
        let name = this.refs.add.value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }

    render() {
        let {decks, addingDeck} = this.props;
        return (
            <div>
                <h2>All decks</h2>
                <ul>
                    {decks.map((deck, i) =>
                        <li key={i}><Link to={`/deck/${deck.id}`}>{deck.name}</Link></li>
                    )}
                </ul>
                {addingDeck && <input type="text" ref="add" onKeyPress={this.createDeck}/>}
            </div>
        );
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
