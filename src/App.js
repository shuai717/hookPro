
import {useState , useEffect ,useMemo,useCallback} from 'react'
import './App.css';

function App() {
  const [num,setNum]=useState(0)
  const add=()=>{
    setNum((num)=>num+1)
    setNum(2)
  }
  const callback =useCallback(()=>{
    console.log(num,'222')
    return num
  },[num])
  // 返回一个缓存的函数，添加依赖项数组可以避免函数的无意义计算，降低了子组件的渲染开销。
  const memo=useMemo((memo,memo2)=>{
    console.log(memo,memo2,num,'memo,memo2') //实参 为undefined undefined
    return num
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[num])//依赖项 返回一个值
  useEffect((effect1,effect2)=>{
    console.log(effect1,effect2,num,'num')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    //return清除副作用函数（如监听、订阅、计时器等）
  },[num])
  return (
    <div className="App">
      <div>{num}</div>
      <div>
      mome{memo}
      </div>
      <div>
      callback {callback()}
      </div> 
      <button onClick={add}>click</button>
    </div>
  );
}

export default App;
