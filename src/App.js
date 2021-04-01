import { useState } from "react";
import HomePage from "./pages/home";
import Counter from "./pages/counter";
import TodoHome from "./pages/todo/todo-home";

import Navigation from "./components/navigation";
import Theme from "./components/theme";

import "./App.css";

function App() {
  const [page, setPage] = useState({
    homePage: true,
    todoHome: false,
    counter: false,
  });
  const [activePage, setActivePage] = useState("homePage");

  const onPageChange = (pageKey) => {
    const updatePages = { ...page };
    let newActivePage = activePage;
    Object.keys(page).forEach((key) => {
      if (key === pageKey) {
        updatePages[pageKey] = true;
        newActivePage = pageKey;
      } else {
        updatePages[key] = false;
      }
    });

    setActivePage(newActivePage);
    setPage(updatePages);
  };

  return (
    <div className="container">
      <Navigation onPageChange={onPageChange} pages={page} />
      <hr />
      <Theme type={activePage}>
        {page.homePage && <HomePage />}
        {page.todoHome && <TodoHome />}
        {page.counter && <Counter />}
      </Theme>
    </div>
  );
}

export default App;
