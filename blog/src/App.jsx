import { useRef } from "react";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import SideMain from "./component/Side/Main/SideMain";
function App() {
  const outerDiv = useRef();
  const num = useRef(0);
  
  //useEffect의 2번째 매개변수 변화값에 따라 실행되는 코드.
  //mount될 때 1번째 매개변수 값을 실행하고, unmount될 때 return을 반환한다.
  useEffect(()=>{
    const wheelHandler = (e) =>{
      e.preventDefault();
      const {deltaY} = e;
      //즉 <div ref={outerDiv} /> 태그의 scrollTop을 가져온다는 뜻이다.
      const {scrollTop} = outerDiv.current;
      //window => 현재 윈도우 창의 정보를 갖고 있음.
      const pageHeight = window.innerHeight;
      //outerDiv의 children 즉. 페이지 수를 가져올 예정.
      const pageNum = outerDiv.current?.children?.length
      const pageHeights = [0]
      
      for(let i = 1 ; i < pageNum ; i++){
        pageHeights.push(pageHeight * i);
      }

      let numCurrent = num.current;
      if(deltaY > 0){

        //scrollTop이 pageHeights보다 크면 되므로, 굳이 소수를 정수로 만들 필요는 없다.
        if(scrollTop >= pageHeights[numCurrent] && scrollTop < pageHeights[numCurrent+1] ){
          if(numCurrent < pageNum-1){
            num.current +=1;
          }
          console.log(scrollTop)
          outerDiv.current.scrollTo({
            top:pageHeights[num.current],
            behavior:"smooth"
          })
        }
      }else{
        //여기에 Math.round를 넣어준 이유는. scrollTop이 완전한 정수로 끝나는 것이 아닌,
        //소수로 끝날수도 있기 때문이다.
        if(Math.round(scrollTop) > pageHeights[numCurrent-1] && Math.round(scrollTop) <= pageHeights[num.current]){
          if(num.current > 0 ){
            num.current -=1;
          }
          outerDiv.current.scrollTo({
            top:pageHeights[num.current],
            behavior:"smooth"
          })
        }
      }
    }
    const outerDivCurrent = outerDiv.current;
    outerDivCurrent.addEventListener('wheel', wheelHandler);
    return ()=>{
      outerDivCurrent.removeEventListener('wheel',wheelHandler);
    }
  },[]);
  return (
    <div ref={outerDiv} className="h-screen overflow-y-scroll scrollbar-hide">
      <Header/>
      <SideMain/>
    </div>
  );
}

export default App;
