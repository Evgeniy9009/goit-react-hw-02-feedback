import PropTypes from "prop-types"
import css from "components/FeedbackOptions/FeedbackOptions.module.css"


const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <>
            <button className={css.btn} onClick={() => onLeaveFeedback("good")}>Good</button>
            <button className={css.btn} onClick={ () => onLeaveFeedback("neutral")}>Neutral</button>
            <button className={css.btn} onClick={ () => onLeaveFeedback("bad")} >Bad</button>        
        </>
        
    )
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
}