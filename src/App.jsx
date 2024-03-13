import { Fragment } from "react";
import Identity from "./identity";
import Banner from "./components/banner";
import PlayAnnounce from "./components/play_announce";

function App() {
  return (
    <Fragment>
      <Banner />
      <Identity />
      <PlayAnnounce />
    </Fragment>
  );
}

export default App;
