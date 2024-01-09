import {
  endpoint,
  authorization,
  INVALID_REQUEST,
  INVALID_INPUT,
  BLANK_QUERY,
} from "./utils";
import axios from "axios";
import { useState } from "react";
import loadable from '@loadable/component'

const Modal = loadable(() => import("./components/modal")) 
const Empty = loadable(() => import("./components/empty")) 
const Search = loadable(() => import("./components/search")) 
const Profile = loadable(() => import("./components/profile")) 
const Skeleton = loadable(() => import("./components/skeleton")) 

function Identity() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(null);
  const [notify, setNotify] = useState({alert: false, message: "", status: "idle"});

  const handleSearch = async () => {
    const emptyInput = !input;
    const inputCount = input.length < 5;

    if (emptyInput || inputCount) {
      setNotify({alert: true, message: emptyInput ? BLANK_QUERY : INVALID_INPUT, status: "rejection"});
      return;
    }

    setNotify({...notify, status: "pending"});
    try {
      const response = await axios.get(`${endpoint}/${input}`, {
        headers: {
          Authorization: authorization,
        },
      });

      if (response.statusText === "OK") {
        setQuery(response.data);
        setNotify({ ...notify, status: "successful"});
      } else {
        setNotify({ alert: true, message: response.data.message, status: "partial_rejection"});
      }
    } catch (error) {
      setNotify({alert: true,message: error?.response?.data?.message || INVALID_REQUEST,status: "rejection"});
    } finally {
      setInput("");
    }
  };

  const stateViews = {
    "pending": <Skeleton/>,
    "partial_rejection": <Empty/>,
    "successful": <Profile details={query}/>,
    "rejection": <Modal notify={notify} setNotify={setNotify} />
  }

  return (
    <div className="container mx-auto max-w-md px-4 py-5">
      <div className="mt-2 w-full">
        <Search
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
          status={notify.status}
        />
        {stateViews[notify.status] ?? null}
      </div>
    </div>
  );
}

export default Identity;