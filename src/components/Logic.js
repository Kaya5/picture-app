import React, { useState, useEffect } from "react";
import "../App.css";
import Image from "./Image";
import uuid from "uuid/v4";
import spinner from "../assets/spinner.gif";

const api = {
  base: "https://pixabay.com/api/",
  key: "22668538-30be4bd0e23a11814eaf101fc",
};
const endURL = "&image_type=photo&pretty=true";

function Logic() {
  const [keyword, setKeyword] = useState("");
  const [outcomes, setOutcomes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getoutcomes = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${api.base}?key=${api.key}&q=${keyword}&order=popular&per_page=100&${endURL}`
      );
      const data = await response.json();
      const hits = data.hits;
      setOutcomes(hits);
      setIsLoading(false);
      console.log(data);
    };
    getoutcomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutcomes(outcomes);
    setKeyword("");
  };

  return (
    <div className="Logic">
      <section>
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            onChange={handleKeyword}
            value={keyword}
          />
        </form>
        {isLoading ? (
          <div className="loader">
            <img src={spinner} alt="" />
          </div>
        ) : (
          <div className="Image">
            {outcomes.map((o) => (
              <Image
                key={uuid()}
                image={o.webformatURL}
                id={o.id}
                views={o.views}
                downloads={o.downloads}
                user={o.user}
                tags={o.tags}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Logic;
