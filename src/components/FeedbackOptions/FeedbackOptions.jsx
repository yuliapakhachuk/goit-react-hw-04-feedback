import PropTypes from "prop-types";
import {OptionBtn} from "components/FeedbackOptions/FeedbackOptions.styled"

export function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div>
            {options.map(
                (option, index, options) => (
                    <OptionBtn 
                        onClick={() => onLeaveFeedback(option)} 
                        key={options[index]}
                    >
                        {option}
                    </OptionBtn>
                )
            )}
        </div>
    )
} 

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    
}