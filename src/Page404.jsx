import {Link} from "react-router-dom";

const Page404 = () => {
	return (
		<>
			<div className="min-h-[90vh] flex flex-col items-center">
				<h1 className="text-white mx-auto font-bold text-3xl my-5">404 : Page Not Found</h1>
				<Link to="/" className="text-stone-300 underline">Home</Link>
			</div>
		</>
	)
}

export default Page404;
