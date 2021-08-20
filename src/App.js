
import { Widget } from '@typeform/embed-react';

function App() {
  return (
    <Widget 
      id={process.env.REACT_APP_TYPEFORM_ID}
      style={{ width: "100%", height: "100vh" }}
      hidden={{ 
        portal_id: process.env.REACT_APP_PORTAL_ID,
        form_guid: process.env.REACT_APP_FORM_GUID
      }}
    />
  );
}

export default App;
