import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Post from "./components/Profile/Posts/Post/Post";
import DialogItems from "./components/Dialogs/DialogItems/DialogItem";
import Message from "./components/Dialogs/Message/Message";


const App = (props) => {

    /*Front*/
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>

                <div class="app-wrapper-content">

                    <Route path="/dialogs"
                           render={() => <Dialogs DialogData={props.DialogData}
                                                  MessageData={props.MessageData}/>}/>
                    <Route path="/profile" render={() => <Profile postData={props.PostData}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

