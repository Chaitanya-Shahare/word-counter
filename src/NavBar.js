import {Link} from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<nav className='flex flex-col items-center w-[200%]
				md:flex-row md:justify-evenly md:py-2'>
				<Link to="/">
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Freevee_logo.svg/2560px-Freevee_logo.svg.png' 
						className='w-36 mt-4 md:my-0 md:ml-3 '/>
				</Link>
				<ul className='text-stone-400 md:text-white flex flex-col mt-3 md:my-0 md:flex-row mx-4'>
					<li className='md:p-2'><Link to="/">Home</Link></li>
					<li className='md:p-2'><Link to="/about">About</Link></li>
				</ul>
			</nav>
		</>

	)
}

export default NavBar;

