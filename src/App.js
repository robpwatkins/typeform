import { Widget } from '@typeform/embed-react';
import TagManager from 'react-gtm-module';
import { useState, useEffect } from 'react';

const tagManagerArgs = {
  gtmId: 'GTM-PMVBB8T'
}

TagManager.initialize(tagManagerArgs)

function App() {
  const [ipAddress, setIpAddress] = useState();

  useEffect(() => {
    const getGeolocation = async () => {
      const { IPv4 } = await (await fetch('https://geolocation-db.com/json/')).json();
      setIpAddress(IPv4);
    }
    getGeolocation();
  }, []);
  
  return (
    <Widget 
      id={process.env.REACT_APP_TYPEFORM_ID}
      style={{ width: "100%", height: "100vh" }}
      hidden={{ 
        ip_address: ipAddress,
        hutk: 321
      }}
    />
  );
}

export default App;
