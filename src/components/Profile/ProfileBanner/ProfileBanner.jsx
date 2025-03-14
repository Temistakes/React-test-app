import React from "react";
import cl from "./ProfileBanner.module.css";

// class ProfileBanner extends React.PureComponent {
//     render() {
//         console.log("RENDER");
//         return (
//             <div className={cl["profile__banner"]}>
//                 <img
//                     src={this.props.img}
//                     alt=""
//                     className={cl["profile__banner-img"]}
//                 />
//             </div>
//         );
//     }
// }

const ProfileBanner = React.memo(({ img, ...props }) => {
    return (
        <div className={cl["profile__banner"]}>
            <img src={img} alt="" className={cl["profile__banner-img"]} />
        </div>
    );
});

export default ProfileBanner;
