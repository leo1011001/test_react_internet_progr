import reactImage from './assets/image.jpg'
import './App.css'
import './styles.css'
import { Task9 } from './components'

function App() {
  return (
    <div>
      <h1>Welcome to React</h1>
      <img src={reactImage} alt="Image" style={{ width: '400px' }} />
      <p>This is your base React application</p>

      {/* Task #9: header component with English/example names and multiple instances */}
      <Task9 firstName="John" lastName="Stevenson" title="Class 10 — Number 9" image={reactImage} />
      <Task9 firstName="Pavel" lastName="Pantev" title="Class 11 — Number 3" />
      <Task9 firstName="Lala" lastName="BlaBla" title="Class 12 — Number 1" image={reactImage} />
    </div>
  )
}

export default App
