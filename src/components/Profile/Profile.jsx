import React from "react";
import cl from "./Profile.module.css";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Loader from "../common/Loader/Loader";

function Profile({ profile, status, updateStatus, ...props }) {
    if (!profile) {
        return <Loader />;
    }

    return (
        <section className={cl["profile"]}>
            <ProfileBanner img={profile.photos.large} />
            <ProfileInfo
                img={profile.photos.small}
                name={profile.fullName}
                descr={profile.aboutMe}
                status={status}
                updateStatus={updateStatus}
            />
            <PostsContainer />
        </section>
    );
}

export default Profile;
