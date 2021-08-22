import { Widget } from '@typeform/embed-react';
import TagManager from 'react-gtm-module';
import { useState, useEffect } from 'react';

const tagManagerArgs = {
  gtmId: 'GTM-PMVBB8T'
}

TagManager.initialize(tagManagerArgs)

function App() {
  const [ip, setIp] = useState();

  useEffect(() => {
    setIp(getGeolocation());
  }, []);

  const getGeolocation = async () => {
    const geolocation = await (await fetch('https://geolocation-db.com/json/')).json();
    return geolocation;
  }

  return (
    <>
      <div>{ip}</div>
      <Widget 
        id={process.env.REACT_APP_TYPEFORM_ID}
        style={{ width: "100%", height: "100vh" }}
        hidden={{ 
          portal_id: process.env.REACT_APP_PORTAL_ID,
          form_guid: process.env.REACT_APP_FORM_GUID,
          ip_address: ip
        }}
      />
    </>
  );
}

export default App;
