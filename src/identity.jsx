import { useState } from "react";
import axios from "axios";
import Search from "./components/search";
import {
  endpoint,
  authorization,
  INVALID_REQUEST,
  INVALID_INPUT,
  BLANK_QUERY,
} from "./utils";
import Modal from "./components/modal";
import Skeleton from "./components/profile/skeleton";
import Empty from "./components/empty";
import Details from "./components/profile/details";

function Identity() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(null);
  const [notify, setNotify] = useState({
    alert: false,
    message: "",
    status: "idle",
  });

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
        setNotify({ alert: true, message: response.data.message, status: "partial-rejection"});
      }
    } catch (error) {
      setNotify({alert: true,message: error?.response?.data?.message || INVALID_REQUEST,status: "rejection"});
    } finally {
      setInput("");
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-5">
      <div className="mt-2 w-full">
        <Search
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
          status={notify.status}
        />
        {notify.status === "pending" && <Skeleton />}
        {notify.status === "partial-rejection" && <Empty />}
        {notify.status === "successful" && <Details details={query} />}
        {notify.status === "rejection" && <Modal notify={notify} setNotify={setNotify} /> }
      </div>
    </div>
  );
}

export default Identity;
