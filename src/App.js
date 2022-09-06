import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import CustomNavBar from "./CustomNavBar";
import Newquote from "./pages/Newquote";
import Allquotes from "./pages/Allquotes";
import Home from "./pages/Home";
import MyQuote from "./pages/MyQuote";

class App extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {
        let Component
        switch (window.location.pathname){
            case("/"):
                Component = Home
                break
            case("/newquote"):
                Component = Newquote
                break
            case("/myquote"):
                Component = MyQuote
                break
            case("/allquotes"):
                Component = Allquotes
                break
            default:
                Component = <h1>Unknown Page</h1>
        }

        return (
            // <div className="App">
                <header className="App-header">
                    <CustomNavBar/>
                    <Component/>
                    {/*<QuoteForm/>*/}
                    {/*<Button onClick={this.handleClick} />*/}
                    {/*{this.state.clicked ? <Listing /> : null}*/}
                </header>
            // </div>
        );
    }
}

// eslint-disable-next-line no-undef

export default App;
