import './index.css'
import logo from './assets/logo-text.png'

function App() {

  return (
    <>
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <img src={logo} className="logo"/>
      <ul className="flex space-x-4 text-gray-700">
        <li>Home</li>
        <li>Techologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>  
      </ul>
      <div className="flex space-x-4">
      <button className="btn btn-sign-in">Sign In</button>
      <button className="btn btn-sign-up">Sign Up</button>
      </div>
    </nav>
    </>
  )
}

export default App
