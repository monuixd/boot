import React, {useState} from "react"
import Header from './components/Header';
//import HeroSlider from './components/Slider';
import Home from './components/home';

function App() {

  const [prodList, setProdList] = useState([]);

  const handelProList = (childData)=>{
    console.log("childData",childData);
    setProdList(childData);

  }

  return (
    <>

      <Header loader={prodList.loader} />
      {/* <HeroSlider /> */}
      <Home fromParent={handelProList} />

    </>

  );
}

export default App;
