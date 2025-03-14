import "./App.css";
import React, { Suspense } from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import Feed from "./components/Feed/Feed";
import Settings from "./components/Settings/Settings";
import NavContainer from "./components/Nav/NavContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializedApp } from "./redux/appReducer";
import Loader from "./components/common/Loader/Loader";

const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer.jsx"),
);

const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersContainer"),
);

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer"),
);

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) return <Loader />;
        return (
            <div className="App">
                <div className="container">
                    <HeaderContainer />
                    <NavContainer />
                    <main className="main">
                        <Suspense fallback={<div>Loading</div>}>
                            <Routes>
                                <Route
                                    path="/dialogs/*"
                                    element={<DialogsContainer />}
                                />
                                <Route path="/music/" element={<Music />} />
                                <Route path="/feed/" element={<Feed />} />
                                <Route
                                    path="/settings/"
                                    element={<Settings />}
                                />
                                <Route
                                    path="/users/"
                                    element={<UsersContainer />}
                                />
                                <Route
                                    path="/profile/:id?"
                                    element={<ProfileContainer />}
                                />
                                <Route path="/login/" element={<Login />} />
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, {
    initializedApp,
})(App);
