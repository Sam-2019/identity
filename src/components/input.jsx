import PropTypes from "prop-types";

function Input({ input, setInput, handleSearch, loading }) {
 return (
  <div className="flex rounded-md">
   <div className="relative flex flex-grow items-stretch focus-within:z-10">
    <input
     required
     value={input}
     onChange={(e) => setInput(e.target.value)}
     type="number"
     name="name"
     id="name"
     className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
     placeholder="0244444444"
    />
   </div>
   <button
    type="button"
    onClick={() => handleSearch()}
    disabled={loading}
    className="ml-2 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full"
   >
    Search
   </button>
  </div>
 );
}

export default Input;

Input.propTypes = {
 input: PropTypes.string,
 setInput: PropTypes.func,
 handleSearch: PropTypes.func,
 loading: PropTypes.bool,
};
