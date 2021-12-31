import { useState, useEffect, useRef } from 'react'
import './App.css';
import MenuItems from './MenuItems/MenuItems';


function App() {

  const APP_ID = "9e92f650"
  const APP_KEY = "2fb2d87858cbecf26e52a47d293e5bf6"

  const [recipes, setRecipies] = useState([])
  const [query, setQuery] = useState("chicken")

  const searchRef = useRef()

  useEffect(() => {
  
    getMenuItems()
  }, [query])

  const getMenuItems = async () => {

    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    const { hits } = await res.json()

    setRecipies(hits)

  }

  function getQuery() {
    const item = searchRef.current.value

    setQuery(item)
  }

  


  return (
    <div className='app'>
      <div className="search-container">
        <h1>Navigate through our menu</h1>
        <div className="search">
            <input type="text" className='search-input' ref={searchRef}/>
            <button className="btn-search" onClick={getQuery}>Get Items</button>
        </div>
      </div>
      <MenuItems recipes={recipes}/>
    </div>
    
  );
}

export default App;
