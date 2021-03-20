import React, { Component, Fragment } from 'react';
import './App.css';
import ContactItem from './Components/contact-item/contact-item';
import NavItem from './Components/navbar/Nav';
import AddContact from './Components/AddContact/addContact';
import ContactList from './Components/contact-list/contact-list';
import NoteList from './Components/note-list/note-list';

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Aboba",
        number: "+38 (098) 22 864 31",
        image: 1,
        gender: "women"
      },
      {
        id: 2,
        name: "Aboba 2",
        number: "+38 (098) 22 864 31",
        image: 82,
        gender: "men"
      },
      {
        id: 3,
        name: "Aboba 3",
        number: "+38 (098) 22 864 31",
        image: 5,
        gender: "women"
      },
      {
        id: 4,
        name: "Aboba 3",
        number: "+38 (098) 22 864 31",
        image: 5,
        gender: "women"
      }
    ],
    notes: [
      {
        title: "Aboba",
        text: "AbobaAbobaAbobaAbobaAbobaAbobaAbobaAbobaAboba"
      },
      {
        title: "Aboba",
        text: "AbobaAbobaAbobaAbobaAbobaAbobaAbobaAbobaAboba"
      },
      {
        title: "Aboba",
        text: "AbobaAbobaAbobaAbobaAbobaAbobaAbobaAbobaAboba"
      },
      {
        title: "Aboba",
        text: "AbobaAbobaAbobaAbobaAbobaAbobaAbobaAbobaAboba"
      }
    ]
  }

  addContact = (newContact) => {
    var tmpContacts = [];

    if (this.state.contacts !== null) {
      tmpContacts = this.state.contacts.slice();
    }

    tmpContacts.push(newContact);

    this.setState({
      contacts: tmpContacts
    })
  }

  // removeContact = (contact) => {
  //   var tmpContacts = [];

  //   if (this.state.contacts !== null) {
  //     tmpContacts = this.state.contacts.slice();
  //     tmpContacts.splice(tmpContacts.findIndex(x => x.id == contact.id), 1);
  //   }

  //   this.setState({
  //     contacts: tmpContacts
  //   })
  // }

  render() {
    return (
      <Fragment>
        <NavItem></NavItem>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <h3>Add new contact:</h3>
              <AddContact addContact={this.addContact}></AddContact>
            </div>
            <div className="col-10">
              <div className="row">
                <ContactList contacts={this.state.contacts}></ContactList>
              </div>
            </div>
            <div className="col-10">
              <div className="row">
                <NoteList notes={this.state.notes}></NoteList>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
