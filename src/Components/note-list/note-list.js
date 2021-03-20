import React, { Fragment } from 'react';
import NoteItem from '../note-item/note-item';

const NoteList = ({ notes }) => {

    var notesTemplate;

    if (notes !== null) {
        notesTemplate = notes.map(item => {
            return (
                <NoteItem
                    title={item.title}
                    text={item.text}
                ></NoteItem>
            );
        })
    }

    return(
        <Fragment>
            {notesTemplate}
        </Fragment>
    )
}

export default NoteList;