import React, { useState } from 'react';
import Footer from './comps/Footer';
import ImageGrid from './comps/ImageGrid';
import Model from './comps/Model';
import Title from './comps/Title';
import UploadFile from './comps/UploadForm';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);


  return (
    <div className="App">
      <header className="App-header">
        <Title />   
        <UploadFile />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Model selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
        <Footer />
      </header>
    </div>
  );
}

export default App;
