import React from "react";
import "./App.scss";
import Header from "./comps/Header";
import Search from "./comps/Search";
import Body from "./comps/Body";
import axios from "axios";

class App extends React.Component {
  state = {
    keyword: "",
    isLoading: false,
    data: [],
  };

  handleKeyword(e) {
    this.setState({ keyword: e, isLoading: true });
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          e === "" ? "tesla" : e
        }&from=2021-12-12&language=id&sortBy=publishedAt&apiKey=f2a8315dcd5448ef85c79197db5977c1`
      )
      .then((e) => this.setState({ data: e.data.articles, isLoading: false }))
      .catch((err) => console.log(err));
  }

  callData() {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          this.state.keyword === "" ? "tesla" : this.state.keyword
        }&from=2021-12-12&language=id&sortBy=publishedAt&apiKey=f2a8315dcd5448ef85c79197db5977c1`
      )
      .then((e) => this.setState({ data: e.data.articles, isLoading: false }))
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.callData();
  }

  render() {
    return (
      <div className="App">
        <Header name="News Apps by Ilham Novriadi" />
        <Search
          placeholder="Masukan Kata Pencarian"
          value={this.state.keyword}
          onChange={this.handleKeyword.bind(this)}
        />
        <Body data={this.state.data} isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
