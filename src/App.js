
import { Widget } from '@typeform/embed-react';

function App() {
  return (
    <Widget id={process.env.REACT_APP_TYPEFORM_ID} style={{ width: "100%", height: "100vh" }} className="typeform" />
  );
}

export default App;
