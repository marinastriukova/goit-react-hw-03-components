import './Button.css';
import PropTypes from 'prop-types';

export default function ButtonLoadMore({incrementPage}) {
    return (
        <div className="ButtonContainer">
            <button className="Button" onClick={incrementPage} >Load more</button>
        </div>
        
    )
}

ButtonLoadMore.propTypes = {
    incrementPage: PropTypes.func
}