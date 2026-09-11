import logo from '../assets/logo-text.png'
export function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <img src={logo} className="logo"/>
      <ul className="flex space-x-4 text-gray-700">
        <li className="text-pink-500 font-bold">Home</li>
        <li>Techologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>  
      </ul>
      <div className="flex space-x-4">
      <button className="btn btn-ghost">Sign In</button>
      <button className="btn btn-secondary">Sign Up</button>
      </div>
    </nav>
  )
}
