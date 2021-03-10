import React, { useEffect, useState } from "react";
import { ConditionCard } from "./component/ConditionCard";
import axios from "axios";

import "./App.css";


type D = { [i: string]: any }; // to declare the format of the json data

axios.defaults.baseURL = "http://localhost:5000"; // use localhosted server
//axios.defaults.baseURL = 'aws endpoints here'

/* 
  Main App component
*/
function App() {
  const [jsonData, setJsonData] = useState<D>({}); // state for json data requested from the server
  const [busy, setBusy] = useState<boolean>(true); // flag to wait for the server call to be done before displaying data
  const [error, setError] = useState<string>(" "); // state to keep store error message

// execute the server call request for the data
  useEffect(() => {
    axios
      .get("api/condition")
      .then((result) => {
        setJsonData(result.data.conditions);
        setBusy(false);
      })
      .catch((error) => setError(error));
  }, []);
// parsing the json data and render it as ConditonCard components
  const parseData = (data: any) => {
    const conditions = data
      ? data.map((condition: any, index: number) => {
          return (
            <ConditionCard
              key={index}
              label={condition.label}
              snippet={condition.snippet ? condition.snippet : undefined}
              image={condition.image ? condition.image : undefined}
            />
          );
        })
      : { erro: "No Data found" };

    return conditions;
  };

  return (
    <main className="cards-container">
      {busy ? <p> data is loading </p> : parseData(jsonData)}
    </main>
  );
}

export default App;
