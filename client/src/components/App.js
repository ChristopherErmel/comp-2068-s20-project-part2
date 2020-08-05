import React, {useState} from 'react';
import Routes from './Routes';
import Nav from './shared/Nav';


function App() {

  const [user, setUser] = useState(false);

  return (
    <React.Fragment>
      <Nav/>
      <Routes setUser={setUser}/>       
    </React.Fragment>
  );
}

export default App;
