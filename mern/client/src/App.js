import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
// import Search from "./components/search";
import RecordList from "./components/recordList";
import SearchResult from "./components/searchRecord2";
import UserSearch from "./components/usersearch";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      {/* <Route path="/search">
        <Search />
      </Route> */}
      <Route path="/searchrecord">
        <SearchResult />
      </Route>

      <Route path="/usersearch">
        <UserSearch/>
      </Route>

      
    </div>
  );
};

export default App;
