import { useState } from "react";
import "./App.css";

import { fetchImage } from "../common/utils";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "../common/constants";

const App = () => {
  const [storedImage, setStoredImage] = useState(null);

  const handleFetchImage = async () => {
    try {
      const imageSrc = await fetchImage();
      setStoredImage(imageSrc);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {storedImage ? (
          <img
            src={storedImage}
            height={IMAGE_HEIGHT}
            width={IMAGE_WIDTH}
            alt=""
          />
        ) : (
          ""
        )}
        <p>Press the button to render a randomly selected image.</p>
        <button onClick={handleFetchImage}>Generate</button>
      </header>
    </div>
  );
};

export default App;
