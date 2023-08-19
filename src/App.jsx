import { useState } from "react";

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState();

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="orange" setSelectedColor={setSelectedColor} />
        <Color color="yellow" setSelectedColor={setSelectedColor} />
      </div>
      <>
        <article>
          <h1>Form Sumit</h1>
          <form action="" target="_blank" method="post">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" value="" />
            <br />
            <label for="lname">Last Name</label>
            <input type="lname" id="lname" name="lname" value="" />
            <br />
            <input type="submit" value="submit" /> <br />
          </form>
        </article>
      </>
    </div>
  );
};

export default App;
