import './App.css'
import { useSelector } from 'react-redux'
import Base1 from './Base1'
import Base2 from './Base2'


function App() {
  const cash = useSelector((state) => state.cash) 


  return (
    <div className="App">
      <h1>ACCOUNT STATE IS : ${cash} </h1>
      <hr />
      <hr />
      <Base1 />
      <Base2 />
    </div>
    
  )
}

export default App
