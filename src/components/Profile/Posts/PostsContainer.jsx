import Posts from "./Posts";
import { connect } from "react-redux";

// Actions Creaters

import { addPost } from "../../../redux/profileReducer";

let mapStateToProps = state => {
    return {
        inputValue: state.profilePage.input,
        posts: state.profilePage.posts,
    };
};

const PostsContainer = connect(mapStateToProps, {
    addPost,
})(Posts);

export default PostsContainer;
