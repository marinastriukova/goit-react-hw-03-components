import Loader from "react-loader-spinner";
import { Component } from 'react'
import './Loader.css'

export default class LoaderSpinner extends Component {

  render() {
    return (
     
        <Loader
          className='Spinner'
          type="Puff"
          color="#303f9f"
          height={50}
          width={50}
          timeout={2000}
        />

    );
  }
}