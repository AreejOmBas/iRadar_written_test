import React,  { useEffect, useState } from "react";
import { ConditionCard } from "./component/ConditionCard";
import axios from 'axios';

import "./App.css";
import { parse } from "node:url";



type D = { [i: string] : any };

axios.defaults.baseURL = 'http://localhost:5000';
function App() {

  const [jsonData,setJsonData] = useState<D>({ });
  const [busy,setBusy] = useState<boolean>(true);
  const [error, setError] = useState<string>(' ')
useEffect(()=> {

axios.get('api/condition')
.then(result =>  {
  setJsonData(result.data.conditions);
    setBusy(false)
})
.catch(error => setError(error));

},[]) ;


const parseData = (data:any) =>{
  
  const conditions =data? data.map((condition :any , index:number) => {
    return (
      <ConditionCard
        label={condition.label}
        snippet={condition.snippet ? condition.snippet : undefined}
        image={condition.image ? condition.image : undefined}
      />
    );
  }) : {erro:'No Data found'};
  
return conditions;
}

return (
  <main className="cards-container">

   { busy ? <p> data is loading </p> : parseData(jsonData)}
  </main>
  )
  
}

export default App;
