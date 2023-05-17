import { useState } from "react";
import axios from "axios";
import Input from "./components/input";
import Profile from "./components/profile/";
import { endpoint, authorization } from "./utils";
import Modal from "./components/modal";

axios.defaults.headers.common["Authorization"] = authorization;

function Identity() {
 const [input, setInput] = useState("");
 const [query, setQuery] = useState({});
 const [profile, setProfile] = useState(false);
 const [loading, setLoading] = useState(false);
 const [alert, setAlert] = useState(false);
 const [message, setMessage] = useState("");

 const handleSearch = async () => {
  if (!input) return;

  setLoading(true);
  try {
   const response = await axios.get(`${endpoint}/${input}`);

   if (response.statusText === "OK") {
    setProfile(true);
    setQuery(response.data);
    setLoading(false);
   } else {
    setLoading(false);
    setMessage(response.data.message);
    setAlert(true);
   }
  } catch (error) {
   setLoading(false);
   setMessage(error.message);
   setAlert(true);
   console.error(error);
  } finally {
   setInput("");
  }
 };

 return (
  <>
   <div className="container mx-auto max-w-md px-4 py-5">
    <div className="mt-2 w-full">
     <Input
      input={input}
      setInput={setInput}
      handleSearch={handleSearch}
      loading={loading}
     />
     {profile && <Profile details={query} loading={loading} />}
     <Modal message={message} alert={alert} setAlert={setAlert} />
    </div>
   </div>
  </>
 );
}

export default Identity;
