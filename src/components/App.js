// create your App component here
import React, { useEffect, useState } from "react";

 const App = () => {

    const [dogImage, UploadDogImage] = useState('');

    useEffect(() => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => UploadDogImage(data.message))
      }, []);
      
 
    
   
    if (!dogImage) {
        return <p>Loading...</p>
    }
    
    return (
      <div>
        
        <img src={dogImage} alt="A Random Dog" />
      </div>
    );
  }
  export default App;