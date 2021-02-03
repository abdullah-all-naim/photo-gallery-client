import React, { useState } from 'react';
import './App.css';
import PhotoGallery from './Components/PhotoGallery/PhotoGallery';
import MyRoute from './Components/MyRoute/MyRoute';
import { createContext } from 'react';
export const UserContext = createContext()
function App() {
  const [loggedinUser, setLoggedinUser] = useState({})
  const [image, setImage] = useState([])
  return (

    <div className="container text-center">
      {/* <h1>Welcome to  photo gallery</h1> <br /> <br /> */}
      <UserContext.Provider value={
        {
          loggedIn: [loggedinUser, setLoggedinUser],
          showImage: [image, setImage]
        }
      }>
        <MyRoute />
      </UserContext.Provider>
    </div>
  );
}

export default App;
