import { useState } from "react";
import axios from "axios";
import Input from "./components/input";
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
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");

  const axiosConfig = {
    headers: {
      Authorization: authorization,
    },
  };

  const handleSearch = async () => {
    if (input.length < 5) {
      setMessage(INVALID_INPUT);
      setAlert(true);
      return;
    }

    if (!input) {
      setMessage(BLANK_QUERY);
      setAlert(true);
      return;
    }

    setLoading(true);
    setProfile(false);
    try {
      const response = await axios.get(`${endpoint}/${input}`, axiosConfig);

      if (response.statusText === "OK") {
        setProfile(true);
        setQuery(response.data);
        setLoading(false);
      } else {
        setMessage(response.data.message);
        setAlert(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setMessage(error?.response?.data?.message || INVALID_REQUEST);
      setAlert(true);
    } finally {
      setInput("");
    }
  };

  return (
    <div className="container mx-auto max-w-md px-4 py-5">
      <div className="mt-2 w-full">
        <Input
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
          loading={loading}
        />
        {loading && <Skeleton />}
        {profile && <Profile details={query} />}
        <Modal
          message={message}
          setMessage={setMessage}
          alert={alert}
          setAlert={setAlert}
        />
      </div>
    </div>
  );
}

export default Identity;
