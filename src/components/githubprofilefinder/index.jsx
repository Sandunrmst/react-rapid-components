import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("sandunrmst");
  const [userData, setUserData] = useState(null);
  const [loadign, setLoading] = useState(false);

  const fetchGithubUserData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  };

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loadign) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
