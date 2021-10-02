const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const arrOfPromises = data.slice(0, 10).map((item) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
      .then((response) => response.json())
      .then((data2) => {
        let newItem = {
          storyId: data2.id,
          title: data2.title,
          url: data2.url,
          timestamp: data2.time,
          scope: data2.score,
          authorId: data2.by
        };
        return newItem;
      })
  );
  return Promise.all(arrOfPromises);
};
export { getData };
