import React from "react";
import "./mycom.css";

function UserProfile(props) {
    return (
        <div className="profile-card">
            <div className="profile-info">
                <img src={props.photo} alt="User photo" className="profile-photo" />
                <h1>{props.name}</h1>
                <h2>{props.profession}</h2>
                <p className="description">{props.description}</p>
                <div className="contact-info">
                    <p><i className="fas fa-map-marker-alt"></i> {props.city}</p>
                    <p><i className="fas fa-envelope"></i> {props.email}</p>
                    <p>
                        <i className="fab fa-github"></i>
                        <a href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a>
                    </p>
                </div>
            </div>

            <div className="profile-image">
                <img src={props.bgImage} alt="Background" />
            </div>
        </div>
    );
}
export default UserProfile;
