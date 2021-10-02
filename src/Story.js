import React from "react";
import { getData } from "./Helper";
const Story = () => {
  const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
  const [topStories, setTopstories] = React.useState([]);
  React.useEffect(() => {
    setTopstories([]);
    getData(url).then((data) => setTopstories(data));
  }, []);
  return (
    <div>
      <h1> Top 10 hacker news </h1>

      <ul>
        {topStories.length !== 0
          ? topStories.map((item, index) => <li key={index}> {item.title} </li>)
          : "Loading"}
      </ul>
    </div>
  );
};

export default Story;
