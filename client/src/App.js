import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { EdgesFlow, initialNodes } from "./custom1";
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [edge, setEdge] = useState([]);
  const [net, setNet] = useState([]);
  const [rou, setRou] = useState([]);
  const [sensor, setSensor] = useState([]);
  const [server, setServer] = useState([]);
  useEffect(() => {
    Axios.get("/api/allFacilInfo")
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);
          setEdge(res.data?.edgeInfo);
          setNet(
            res.data?.networkInfo.sort(function (a, b) {
              return a.rcv_no - b.rcv_no;
            }),
          );
          setRou(
            res.data?.routerInfo.sort(function (a, b) {
              return a.rcv_no - b.rcv_no;
            }),
          );
          setSensor(
            res.data?.sensorInfo.sort(function (a, b) {
              return a.rcv_no - b.rcv_no;
            }),
          );
          setServer(
            res.data?.serverInfo.sort(function (a, b) {
              return a.rcv_no - b.rcv_no;
            }),
          );
        }
      })
      .catch(e => {
        console.log(e, "error");
      });
  }, []);

  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <EdgesFlow
        data={data}
        edge={edge}
        net={net}
        rou={rou}
        sen={sensor}
        ser={server}
      />
    </div>
  );
}

export default App;
