import PropTypes from 'prop-types'

export default function Button({ color, text, onClick, onAdd }) {
    
    // const onClick = () => {
    // }
    
    return (
        <button onClick={onAdd} style = {{backgroundColor:color}} className="btn">{text} </button>
    )
}

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}