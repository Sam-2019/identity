export const endpoint = import.meta.env.VITE_API_URL;
export const authorization = import.meta.env.VITE_AUTH;

export const classNames = (...classes) => {
 return classes.filter(Boolean).join(" ");
};

export const people = {
 name: "Ashley Porter",
 handle: "@ashleyporter",
 dob: "June 23, 1988",
 dob2: "1988-06-23",
 title: "Paradigm Representative",
 role: "Admin",
 email: "janecooper@example.com",
 telephone: "+1-202-555-0170",
 location: "New York, NY, USA",
 website: "ashleyporter.com",
 imageUrl:
  "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80",
 bio: "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu.",
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

 return null;
};

export const getErrorTitle = (data) => {
 if (!data) {
  return;
 }

 if (messages.network_error.error.includes(data)) {
  return messages.network_error.error;
 }

 return null;
};
