import React from "react";
import ReactDOM from "react-dom/client";
import UserProfile from "./components/UserProfile";
import MyInfo from "./components/MyInfo";
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <UserProfile
            name="Yulia Kostenko"
            profession="Frontend Developer"
            description="I create modern web interfaces and work with React."
            city="Sumy, Ukraine"
            email="ulakostenko7@gmail.com"
            github="https://github.com/ulakostenko"
            photo="img/avatar.jpg"
            bgImage="img/mountains.webp"
        />
        <MyInfo />
    </React.StrictMode>
);
