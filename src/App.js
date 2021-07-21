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

    /*Data*/
    let PostData = [
        {id: 1, message: "Some message for post", like: 15},
        {id: 2, message: "Some different for post number 2", like: 10},
        {id: 3, message: "First post, i gues", like: 3}
    ]

    let DialogData = [
        {id: 1, name: "Vasya"},
        {id: 2, name: "Dasha"},
        {id: 3, name: "Masha"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Glasha"}
    ]

    let MessageData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Welcome"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Where is my money?"},
        {id: 5, message: "I need my money"},
    ]
    /*Mapping*/
    let PostElement = PostData
        .map(post => <Post message={post.message} like={post.like}/>)

    let DialogElements = DialogData
        .map(dialog => <DialogItems name={dialog.name} id={dialog.id}/>)

    let MessageElement = MessageData
        .map(message => <Message message={message.message}/>)

    /*Front*/
    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>

                <div class="app-wrapper-content">

                    <Route path = "/dialogs" render= { () => <Dialogs DialogElements = {DialogElements} MessageElement = {MessageElement}/>}/>
                    <Route path = "/profile" render= { () => <Profile postData ={PostElement}/>}/>
                    <Route path = "/news" render= { () => <News />}/>
                    <Route path = "/music" render= { () => <Music />}/>
                    <Route path = "/settings" render= { () => <Settings />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;

