import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


export default class ImageFinder extends Component{

    state = {
        name: '',
    }

    handleFormSubmit = name => {
        this.setState({name})
    }

    render(){
        return (
        <>
            <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
            <ImageGallery onChangeName={this.state.name}></ImageGallery>
        </>)
    }
}

