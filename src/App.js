import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route
                exact
                path="/"
                element={<Login />}
            />
            <Route
                exact
                path="/home"
                element={<Home />}
            />
            <Route
                exact
                path="/profile"
                element={<Profile />}
            />
        </Routes>  
      </BrowserRouter>
    </>
    
  );
}

export default App;
