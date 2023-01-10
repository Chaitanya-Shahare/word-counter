import {useEffect, useState} from "react";

const Home = () => {

	const [text, setText] = useState("");
	const hText = (event) => { setText(event.target.value); }
	const [ans, setAns] = useState("");

	const find = (event) => {
		// event.preventDefault();
		let char = text.split("").length;
		let wc = "";
		char == 0 ? wc = 0 : wc = text.split(" ").length;
		
		let msg = "Word count: " + wc + ",  " + "Character count: " + char;
		setAns(msg);
	}

	useEffect(() => {find()}, [text])

	return (
		<>
			<div className="min-h-[90vh]  flex flex-col items-center">
				<h1 className="text-white  font-bold text-3xl my-5">Word Counter</h1>
				<form className="flex flex-col items-center font-mono" onSubmit={find}>
					<textarea className="hidden lg:block bg-stone-800 text-white p-4 my-4 rounded-lg resize-none focus:outline-none focus:ring focus:ring-orange-300" rows={10} cols={70} onChange={hText}></textarea>
					<textarea className="hidden sm:block lg:hidden bg-stone-800 text-white p-4 my-4 rounded-lg resize-none focus:outline-none focus:ring focus:ring-orange-300" rows={10} cols={50} onChange={hText}></textarea>
					<textarea className="sm:hidden bg-stone-800 text-white p-4 my-4 rounded-lg resize-none focus:outline-none focus:ring focus:ring-orange-300" rows={10} cols={30} onChange={hText}></textarea>
					<input type="submit" className="bg-white w-[20%] rounded-md my-2"></input>
				</form>
				<h2 className="text-white mt-3">{ans}</h2>
			</div>
		</>
	)
}

export default Home;
