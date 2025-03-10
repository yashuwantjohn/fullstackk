import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMemberCard from './components/TeamMembercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Our Team</h1>
      <div className="team-container">
        <TeamMemberCard name="John Doe" title="Software Engineer" />
        <TeamMemberCard name="Jane Smith" title="Product Manager" />
        <TeamMemberCard name="Peter Jones" title="UI/UX Designer" />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
