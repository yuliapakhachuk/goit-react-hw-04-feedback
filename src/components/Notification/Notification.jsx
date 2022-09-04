import PropTypes from "prop-types";
import {NotifyMessage} from "components/Notification/Notification.styled";

export function Notification({message}) {
    return (
        <NotifyMessage>
            {message}
        </NotifyMessage>
    )
} 

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}