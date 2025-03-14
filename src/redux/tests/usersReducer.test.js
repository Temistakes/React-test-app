import usersReducer, { followSuccess, setUsers } from "../usersReducer";

const state = {
    users: [{ id: 1, name: "bre", followed: false, }],
    usersCount: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    fakeCount: 0,
}

// function increment(obj) {
//     obj.id++;
//     return obj;
// }

// Tests

// describe("Sum Tests", () => {
//     const testCases = [
//         {
//             in: { id: 5 },
//             expect: { id: 6 },
//         },
//         {
//             in: { id: 7 },
//             expect: { id: 8 },
//         },
//         {
//             in: { id: 9 },
//             expect: { id: 10 },
//         },
//     ];

//     testCases.forEach(test => {
//         it(`Тест`, () => {
//             expect(increment(test.in)).toEqual(test.expect);
//         });
//     });
// });

describe("Users Reducer Tests", () => {
    it("Should return 2", () => {
        const action = setUsers([...state.users, { name: "example" }]);
        const newState = usersReducer(state, action);
        expect(newState.users.length).toBe(2);
    });

    it("Should correct name", () => {
        const action = setUsers([...state.users, { name: "example" }]);
        const newState = usersReducer(state, action);
        expect(newState.users[1].name).toBe("example");
    });

    it("Should 'true' in follow", () => {
        const action = followSuccess(1);
        const newState = usersReducer(state, action);
        expect(newState.users[0].followed).toBe(true);
    });
});