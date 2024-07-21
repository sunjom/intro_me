import { useEffect, useState } from "react";
import Header from "./component/Header";
import MyInfo from "./component/MyInfo";
function App() {
  const [position, setPosition] = useState(0);
  function onScroll(){
    setPosition(window.scrollY);
    //headBg.current.style.setProperty('background-position', position*0.3)
}
//useEffect 두번째 매개변수의 값이 바뀔경우 첫번째 함수가 실행된다. 
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () =>{
        window.removeEventListener("scroll", onScroll);
    }
},[position])
  return (
    <div>
      <Header />
      <MyInfo/>
    </div>
  );
}

export default App;
