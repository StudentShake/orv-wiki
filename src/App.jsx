import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/1. Home/Home'
import Read from './pages/2. Read/Read'
import Search from './pages/3. Search/Search'
import Guide from './pages//4. Guide/Guide'
import Edit from './pages/5. Edit/Edit'
import Community from './pages/6. Community/Community'
import Account from './pages/7. Account/Account'
import Loading from './pages/loading/Loading'
import NotFound from './pages/notFound/NotFound'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      Welcome to ORV (might seem like a downgrade but now I have more control so yeah)
      <Navbar/>
      <Home/>
      <Read/>
      <Search/>
      <Guide/>
      <Edit/>
      <Community/>
      <Account/>
      <Loading/>
      <NotFound/>
    </BrowserRouter>
  )
}

export default App