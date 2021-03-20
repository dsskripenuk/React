import React, { Component, Fragment } from 'react';
import './contact-item.css';

class ContactItem extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        number: this.props.number,
        image: this.props.image,
        gender: this.props.gender,
        isFavorite: false
    }

    setRandomImage = () => {
        var randomAvatar = Math.floor(Math.random() * Math.floor(99));
        this.setState({
            image: randomAvatar
        });
    }

    changeFavorite = () => {
        this.setState({
            isFavorite: !this.state.isFavorite
        });
        console.log("isFavorite ", this.state.isFavorite)
    }

    render() {
        const { name, number, image, gender } = this.state;
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;

        var class_star = "favorite far fa-star fa-2x";

        if(this.state.isFavorite === true){
            class_star = "favorite fas fa-star fa-2x";
        }

        return (
            <Fragment>
                <div className="card col-4">
                    <img className="card-img-top" src={image_URL} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{number}</p>
                    </div>
                    <div className="card-footer" id="starDiv">
                        <button onClick={this.setRandomImage.bind(this)} className="btn btn-info">Random image</button>
                        <i onClick={this.changeFavorite} class={class_star}></i>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ContactItem;
