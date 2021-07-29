import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Start from "./components/Start/Start";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
        return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>

            <div class="app-wrapper-content">

                <Route exact path="/" render={() => <Start/>}/>

                <Route path="/dialogs" render={() => <DialogContainer/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>

        </div>
    );
}

export default App;

