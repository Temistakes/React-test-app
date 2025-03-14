import { addMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        input: state.dialogsPage.input,
    };
};

export default compose(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuthRedirect,
)(Dialogs);
