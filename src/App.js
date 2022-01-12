import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./comps/Header";
import Search from "./comps/Search";
import Body from "./comps/Body";
import axios from "axios";

function App() {
  const [keyword, setkeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleKeyword = (e) => {
    setkeyword(e);
  };

  const callData = () => {
    setIsLoading(true);
    setData([]);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${
          keyword === "" ? "tesla" : keyword
        }&from=2021-12-12&language=id&sortBy=publishedAt&apiKey=f2a8315dcd5448ef85c79197db5977c1`
      )
      .then((e) => {
        setData(e.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (isLoading !== true) {
      callData();
    }
  }, [keyword]);
  return (
    <div className="App">
      <Header name="News Apps by Ilham Novriadi" />
      <Search
        placeholder="Masukan Kata Pencarian"
        value={keyword}
        onChange={(e) => handleKeyword(e)}
      />
      <Body data={data} isLoading={isLoading} />
    </div>
  );
}

App.propTypes = {};

export default App;
