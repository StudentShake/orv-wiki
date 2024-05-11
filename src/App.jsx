import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom'

import Main from './components/Main'

import Navbar from "./components/Navbar";

import Home from './pages/1. Home/Home'
import Read from './pages/2. Read/Read'
import Search from './pages/3. Search/Search'
import Guide from './pages//4. Guide/Guide'
import Edit from './pages/5. Edit/Edit'
import Community from './pages/6. Community/Community'
import Account from './pages/7. Account/Account'
import Loading from './pages/loading/Loading'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <Router>
      <Navbar />
            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/read" element={<Read />} />
                <Route path="/search" element={<Search />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/community" element={<Community />} />
                <Route path="/account" element={<Account />} />

                
            </Routes>
      <Main/>
      {/* 
      <Home/>
      <Read/>
      <Search/>
      <Guide/>
      <Edit/>
      <Community/>
      <Account/>
      <Loading/> */
      /* <NotFound/> */}
    </Router>
  )
}

export default App