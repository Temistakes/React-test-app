import React, { useEffect, useState } from "react";
import cl from "../Profile.module.css";

const ProfileStatus = props => {
    let [editMode, setEditMode] = useState(false);
    let [input, setInput] = useState(props.status);

    useEffect(() => {
        setInput(props.status);
    }, [props.status]);

    const onEditMode = () => {
        setEditMode(true);
    };

    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(input);
    };

    const onInput = e => {
        setInput(e.target.value);
    };

    return (
        <div className={cl.profile__status}>
            {editMode ? (
                <input
                    type="text"
                    onBlur={offEditMode}
                    autoFocus={true}
                    value={input}
                    onChange={onInput}
                />
            ) : (
                <span onDoubleClick={onEditMode}>
                    {props.status ? props.status : "---------------------"}
                </span>
            )}
        </div>
    );
};

// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         input: this.props.status,
//     };

//     onEditMode = () => {
//         this.setState({
//             editMode: true,
//         });
//     };

//     offEditMode = () => {
//         this.setState({
//             editMode: false,
//         });

//         this.props.updateStatus(this.state.input);
//     };

//     onInput = e => {
//         this.setState({
//             input: e.target.value,
//         });
//     };

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 input: this.props.status,
//             });
//         }
//     }

//     render() {
//         return (
//             <div className={cl.profile__status}>
//                 {this.state.editMode ? (
//                     <input
//                         type="text"
//                         onBlur={this.offEditMode}
//                         autoFocus={true}
//                         value={this.state.input}
//                         onChange={this.onInput}
//                     />
//                 ) : (
//                     <span onDoubleClick={this.onEditMode}>
//                         {this.props.status
//                             ? this.props.status
//                             : "---------------------"}
//                     </span>
//                 )}
//             </div>
//         );
//     }
// }

export default ProfileStatus;
