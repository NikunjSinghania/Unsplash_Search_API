import "./styles.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const search = useRef();
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&query=office&client_id=0qcbbk7nKoHdce5YL6D_0S8genBv7KfSKkPgzRSUlWs"
      )
      .then((res) => {
        setData(res.data.results);
        setLoading(true);
      });
    //https://api.unsplash.com/photos?page=1&client_id=0qcbbk7nKoHdce5YL6D_0S8genBv7KfSKkPgzRSUlWs
  }, []);

  function getData() {
    setLoading(false);

    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${search.current.value}&client_id=0qcbbk7nKoHdce5YL6D_0S8genBv7KfSKkPgzRSUlWs`
      )
      .then((res) => {
        setData(res.data.results);
        setLoading(true);
      });
  }

  return (
    <div className="App">
      <input name="search" ref={search} onChange={getData} />
      <div>
        {loading &&
          data.map((e) => {
            return <img src={e.urls.regular} />;
          })}
        {!loading && <p>LOADING</p>}
      </div>
    </div>
  );
}
