import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
    return (
        <div className={style.section}>
            <h1 className={style.title}>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
}

export default Section;