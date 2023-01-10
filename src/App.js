import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Page404 from './Page404';
import About from './About';
import Footer from './Footer';

function App() {
  return (
	<>
		<div className="bg-black">
			<BrowserRouter>
				<div className="flex flex-col justify-between items-center">
				<NavBar/>
					<Routes>
					<Route path='/' element={ <Home/> }/>
					<Route path='/about' element={ <About/> }/>
					<Route path='*' element={ <Page404/> }/>
					</Routes>
				<Footer/>
				</div>
			</BrowserRouter>
	  </div>
	</>
  );
}

export default App;

