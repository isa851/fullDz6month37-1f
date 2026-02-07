import { useState } from "react";
import Num from "./Num";
import Btn from "./Btn";


function App() {
  const [num, setNum] = useState(0);
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <Num num={num} />
      <Btn num={num} setNum={setNum} />

    

    </div>
  );
}

export default App;
