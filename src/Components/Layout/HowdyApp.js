import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import fire, {db} from '../../Redux/fbConfig/fbConfig';
import {connect} from "react-redux";
import Nav from "./Nav";
import { LogOut } from "../../Redux/actions/Authactions";

//sign out see if i can do a dropdown for account options

const HowdyApp = (props) => {

    const [messages,
        setMessages] = useState([
        {
            username: "Jay",
            message: "wetin dey happen"
        }
    ]);
    const [input,
        setInput] = useState('');

    const [currentUserData,
        setCurrentUserData] = useState({});

    useEffect(() => {
        // run once page loads
        db
            .collection("messages")
            .orderBy("time", "asc")
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
    }, [])

    if (!fire.auth().currentUser) {
        return <Redirect to="/login"/>
    }

    const user = fire
        .auth()
        .currentUser;
    const uid = user.uid;

    db
        .collection("users")
        .where("uid", "==", uid)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setCurrentUserData(doc.data());
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    const {username} = currentUserData;

    const handleSubmit = (e) => {
        e.preventDefault();

        input !== "" && db
            .collection("messages")
            .add({
                username: username,
                message: input,
                time: fire
                    .firestore
                    .FieldValue
                    .serverTimestamp()
            });

        //Clear the state
        setInput("");
    }

    //signout
    const signOut = () =>{
        const { signout } = props;

        signout();
    }

    return (
        <div>
            <Nav/>
            <div className="container">
                {/* <h1>Welcome To HowdyApp</h1>
                <button className="btn btn-primary" onClick={SignOut}>Logout</button> */}
                <div className="welcome_text v_align">
                    <h2 className="section__head text_color">Welcome {username}
                    </h2>
                    <p className="section__text">This is the default group chat. Please bear with us
                        as private messaging feature will be added later</p >
                        <p className="logout_link" onClick={signOut}>Log Out</p>
                </div>

                <div className="messages_holder">

                    {messages.map(message => (
                        <div
                            className={username === message.username
                            ? "message_holder_sender"
                            : "message_holder mt-3"}>
                            <div
                                className={username === message.username
                                ? "message_content_sender mt-3"
                                : "message_content mt-3"}>
                                <span className="section__text--small text_color text_is_bold">{message.username}</span>
                                <p className="section__text">{message.message}</p>
                            </div>
                        </div>
                    ))
}
                </div>

                <div className="input_holder">
                    <form onSubmit={handleSubmit}>
                        <div className="form_element">
                            <input
                                type="text"
                                name="input"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Send Message"/>
                            <button type="submit" className="default_btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({onlineMessages: state.auth.messages})

const mapDispatchToProps = (dispatch) => ({
    signout: () => dispatch(LogOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(HowdyApp);