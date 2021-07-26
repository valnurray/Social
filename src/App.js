import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Start from "./components/Start/Start";
// import state from "./redux/state";


const App = (props) => {

    /*Front*/
    return (
        <div className="app-wrapper">

            <Header/>
            <Navbar/>

            <div class="app-wrapper-content">

                <Route exact path="/" render={() => <Start/>}/>

                <Route path="/dialogs"
                       render={() => <Dialogs store = {props.store}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.state.ProfilePage}
                                                              dispatch={props.dispatch}
                />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>

        </div>
    );
}

export default App;

