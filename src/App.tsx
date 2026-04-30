import './App.css'
import Header from './components/Header'
import JobList from './components/JobList'
import { sampleJobs } from './data'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <JobList jobs={sampleJobs} />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Academic Jobs Portal. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
