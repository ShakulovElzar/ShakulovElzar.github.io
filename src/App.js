import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App(props) {
    return (

            <div className="App">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <Content addPost={props.addPost} state={props.state}/>
            </div>

    );
}

export default App;