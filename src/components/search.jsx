import PropTypes from "prop-types";

function Search({ input, setInput, handleSearch, status }) {
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
          className="block w-full rounded-full px-4 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 border-2 border-slate-300 hover:border-slate-400 focus:border-slate-400 active:border-slate-400 focus:outline-orange-300"
          placeholder="0244444444"
        />
      </div>
      <button
        type="button"
        onClick={() => handleSearch()}
        disabled={status === "pending"}
        className="ml-2 px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full"
      >
        {status === "pending" ? "Loading..." : "Search"}
      </button>
    </div>
  );
}

export default Search;

Search.propTypes = {
  input: PropTypes.string,
  status: PropTypes.string,
  setInput: PropTypes.func,
  handleSearch: PropTypes.func,
};
