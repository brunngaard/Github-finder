import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const AlertContext = useContext(alertContext);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      AlertContext.setAlert("please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Sech Users..."
          value={text}
          onChange={onChange}
        ></input>
        <input
          type="Submit"
          defaultValue="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
