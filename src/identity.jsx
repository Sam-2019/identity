import { useState } from "react";
import axios from "axios";
import Search from "./components/search";
import Profile from "./components/profile/";
import {
  endpoint,
  authorization,
  INVALID_REQUEST,
  INVALID_INPUT,
  BLANK_QUERY,
} from "./utils";
import Modal from "./components/modal";
import Skeleton from "./components/profile/skeleton";

function Identity() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState(null);
  const [profile, setProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState({
    alert: false,
    message: "",
  });

  const handleSearch = async () => {
    if (input.length < 5) {
      setNotify({
        alert: true,
        message: INVALID_INPUT,
      });
      return;
    }

    if (!input) {
      setNotify({
        alert: true,
        message: BLANK_QUERY,
      });
      return;
    }

    setLoading(true);
    setProfile(false);
    try {
      const response = await axios.get(`${endpoint}/${input}`, {
        headers: {
          Authorization: authorization,
        },
      });

      if (response.statusText === "OK") {
        setProfile(true);
        setQuery(response.data);
        setLoading(false);
      } else {
        setNotify({
          alert: true,
          message: response.data.message,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setNotify({
        alert: true,
        message: error?.response?.data?.message || INVALID_REQUEST,
      });
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
          loading={loading}
        />
        {loading && <Skeleton />}
        {profile && <Profile details={query} />}
        <Modal notify={notify} setNotify={setNotify} />
      </div>
    </div>
  );
}

export default Identity;
