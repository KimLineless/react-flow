import "./App.css";
import React, { useEffect, useState } from "react";
import { EdgesFlow } from "./custom1";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("/api/allFacilInfo")
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);
        }
      })
      .catch(e => {
        console.log(e, "error");
      });
  }, []);

  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <EdgesFlow data={data} />
    </div>
  );
}

export default App;
