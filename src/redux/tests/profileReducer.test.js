import profileReducer, { addPost, deletePost } from '../profileReducer';

// Tests

const state = {
    posts: [
        { id: 1, message: "bre", likecount: 0 },
    ],
    profile: null,
    status: null,
};

it("Should increment posts", () => {
    const action = addPost("example");
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

it("Should return valid message", () => {
    const action = addPost("example");
    const newState = profileReducer(state, action);
    expect(newState.posts[1].message).toBe("example");
});

it("Should decrement posts", () => {
   const action = deletePost(1);
   const newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(0); 
});