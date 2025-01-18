import { useEffect } from 'react'
import './App.css'
const tg = window.Telegram.WebApp
function App() {

  useEffect(() => {
    tg.ready()
  }, [])
  
  function OnClose() {
    tg.close()
  }

  return (
    <>
      <div className='App'>
        <button onClick={OnClose}>Закрыть</button>
      </div>
    </>
  )
}

export default App
