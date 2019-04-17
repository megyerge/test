import React, {Component} from 'react';
import './App.css';
import Search from "./components/Search";
import Result from "./components/Result";
import Footer from "./components/Footer";

class App extends Component {

    state = {
        searchPhrase: '',
        result: [],
        footerText: 'TV Maze API'
    };

    input = (event) => {
        this.setState({searchPhrase: event.target.value});
        this.getData(event.target.value)
            .then(
            result => {
                this.setState({result})
            }
        );
    };

    clearSearch = () => {
        this.setState({searchPhrase: ''});
        this.setState({result: []});
    };

    getData = (query) => {
        return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
            .then(result => result.json());
    };
    

    render() {
        return (
            <div>
                <Search searchPhrase={this.state.searchPhrase} input={this.input}/>
                <Result
                    searchPhrase={this.state.searchPhrase}
                    clearSearch={this.clearSearch}
                    getData={this.getData}
                    result={this.state.result}
                />
                <Footer text={this.state.footerText}/>
            </div>
        );
    }
}

export default App;
