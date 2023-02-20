import Categories from "./components/Categories";
import Newslist from "./components/NewsList";
import { useState, useCallback } from "react";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect}></Categories>
      <Newslist category={category}></Newslist>;
    </div>
  );
};

export default App;
