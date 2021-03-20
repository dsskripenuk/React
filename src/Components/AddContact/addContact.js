import React, { Component, Fragment } from 'react'

class addContact extends Component {

    state = {
        id: 0,
        name: "",
        number: "",
        image: 0,
        gender: "Women",
        MessageError: ""
    }

    handlerChangeInput = (e) => {
        var key = e.target.name;
        var value = e.target.value;

        this.setState({
            [key]: value
        });
    }

    isValid = () => {
        if (this.state.name === "" || this.state.number === "")
            return false;
        else
            return true;
    }

    submitForm = (e) => {
        e.preventDefault();

        if (this.isValid())
        {
            this.setState({
                MessageError: ""
            });

            this.props.addContact({
                id: this.state.id,
                name: this.state.name,
                number: this.state.number,
                image: this.state.image,
                gender: this.state.gender
            });
        }
        else
            this.setState({
                MessageError: "Please, enter all fields!"
            });

        // console.log("Form submit");
    }

    render() {
        const { MessageError } = this.state;

        return (
            <form onSubmit={this.submitForm}>
                 <div class="form-group">
                    <label>Id</label>
                    <input type="text" class="form-control" name="name" onChange={this.handlerChangeInput} placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label>Contact name</label>
                    <input type="text" class="form-control" name="name" onChange={this.handlerChangeInput} placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label>Contact number</label>
                    <input type="text" class="form-control" name="number" onChange={this.handlerChangeInput} placeholder="Enter number" />
                </div>
                <div class="form-group">
                    <label>Contact number image</label>
                    <input type="number" class="form-control" name="image" onChange={this.handlerChangeInput} placeholder="Enter image number" />
                </div>
                <div class="form-group">
                    <label>Contact gender</label>
                    <select className="form-control" name="gender" onChange={this.handlerChangeInput}>
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                    </select>
                </div>
                <p className="danger-text">{MessageError}</p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default addContact;