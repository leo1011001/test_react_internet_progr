import reactImage from './assets/image.jpg'
import './App.css'

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <img src={reactImage} alt="Image" style={{ width: '400px' }} />
      <p>This is your base React application</p>
    </div>
  )
}

export default App
