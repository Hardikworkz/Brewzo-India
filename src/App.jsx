import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import ClickSpark from './components/ClickSpark'
import DemoHeader from './components/navigation/DemoHeader'
import Home from './Pages/Home'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Reviews from './Pages/Reviews'

function App() {
  return (
    <ClickSpark
      sparkColor="#c96a15"
      sparkSize={12}
      sparkRadius={18}
      sparkCount={10}
      duration={450}
      extraScale={1.1}
    >
      <main className="app-shell">
        <DemoHeader />
        <div className="app-view">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </ClickSpark>
  )
}

export default App
