import React, { Component, Fragment } from 'react';

class NoteItem extends Component {
    state = {
        title: this.props.title,
        text: this.props.text
    }

    render() {
        const { title, text } = this.state;

        return (
            <Fragment>
                <div className="card col-4">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NoteItem;
