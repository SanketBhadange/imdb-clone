import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Banner from './components/Banner'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  

  return (
       <>
            <BrowserRouter> 
              <Navbar/>
                  <Routes>

                        <Route 
                              path='/' 
                              element={
                              <>
                                <Banner/>
                                <Movies/>
                              </>
                              }
                        /> 
                        
                        <Route
                              path='/Watchlist'
                              element={<Watchlist/>}
                        />
                      
                  </Routes>
            </BrowserRouter>
                    
                        
           
            
      </>
  )
}

export default App
