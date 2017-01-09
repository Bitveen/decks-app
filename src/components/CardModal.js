import React from 'react';
import { Link, browserHistory } from 'react-router';


class CardModal extends React.Component {
    constructor(props) {
        super(props);
        this.onSave = this.onSave.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidUpdate() {
        this.refs.front.focus();
    }

    onSave(e) {
        let front = this.refs.front;
        let back = this.refs.back;

        this.props.onSave(Object.assign({}, this.props.card, {
            front: front.value,
            back: back.value
        }));

        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }

    onDelete(e) {
        this.props.onDelete(this.props.card.id);
        browserHistory.push(`/deck/${this.props.card.deckId}`);
    }


    render() {
        let { card, onDelete } = this.props;

        return (
            <div>
                <h1>{ onDelete ? 'Edit' : 'New' }</h1>
                <label>Card Front:</label>
                <textarea ref='front' defaultValue={card.front}></textarea>
                <label>Card Back:</label>
                <textarea ref='back' defaultValue={card.back}></textarea>
                <p>
                    <button onClick={this.onSave}>Save Card</button>
                    <Link to={`/deck/${card.deckId}`}>Cancel</Link>
                    {
                        onDelete ?
                        <button onClick={this.onDelete}>Delete card</button>:
                        null
                    }
                </p>
            </div>
        );
    }
}


export default CardModal;
