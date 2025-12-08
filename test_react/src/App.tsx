import reactImage from './assets/image.jpg'
import './App.css'
import './styles.css'
import { Task9 } from './components'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const handleButton1Click = () => {
    alert('Button 1 clicked!')
  }

  const handleButton2Click = () => {
    alert('Button 2 clicked!')
  }

  return (
    <div>
      <Header />
      <h1>Welcome to React</h1>
      <img src={reactImage} alt="Image" style={{ width: '400px' }} />
      <p>This is your base React application</p>

      {/* Button examples with onClick handlers */}
      <div>
        <h2>Button Examples</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <Button onClick={handleButton1Click}>Button 1</Button>
          <Button onClick={handleButton2Click}>Button 2</Button>
          <Button>Button without handler</Button>
        </ul>
      </div>

      {/* Task #9: header component with English/example names and multiple instances */}
      <Task9 firstName="John" lastName="Stevenson" title="Class 10 — Number 9" image={reactImage} />
      <Task9 firstName="Pavel" lastName="Pantev" title="Class 11 — Number 3" />
      <Task9 firstName="Lala" lastName="BlaBla" title="Class 12 — Number 1" image={reactImage} />
    </div>
  )
}

export default App