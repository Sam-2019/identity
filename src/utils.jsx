export const env = import.meta.env.VITE_ENV;
export const authorization = import.meta.env.VITE_AUTH;
export const dev_endpoint = import.meta.env.VITE_DEV_API_URL;
export const prod_endpoint = import.meta.env.VITE_PROD_API_URL;

export const endpoint = env != "development" ? prod_endpoint : dev_endpoint;
export const NO_DATA = "ID not found";
export const INVALID_REQUEST = "Invalid request";

export const classNames = (...classes) => {
 return classes.filter(Boolean).join(" ");
};

const messages = {
 network_error: {
  error: "Network Error",
  message:
   "Connection to the internet has been lost or interfered with, the site has been deleted or moved, or the site is experiencing too much traffic and is temporarily down. Refresh the page a few times and then try again",
 },
};

export const getErrorMessage = (data) => {
 if (!data) {
  return;
 }

 if (messages.network_error.error.includes(data)) {
  return messages.network_error.message;
 }

 return data;
};

export const getErrorTitle = (data) => {
 if (!data) {
  return;
 }

 if (messages.network_error.error.includes(data)) {
  return messages.network_error.error;
 }

 return "Error";
};

export const email_validator = (data) => {
 if (!data) {
  return false;
 }

 if (data.includes("@")) {
  return true;
 }

 return false;
};
