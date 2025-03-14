import { connect } from "react-redux";
import Nav from "./Nav";

let mapStateToProps = state => {
    return {
        links: state.sidebar.sidebar,
    };
};

let NavContainer = connect(mapStateToProps, null)(Nav);

export default NavContainer;
