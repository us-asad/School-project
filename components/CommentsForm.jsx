import { useState, useRef, useEffect } from "react";

export default function CommentsForm() {
	const [error, setError] = useState("");
	const [saveData, setSaveData] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [commentData, setCommentData] = useState({
		name: "",
		email: "",
		comment: "",
	});

	const {name, email, comment} = commentData;

	const handleCommentData = e => {
		const nameOfData = e.target.name;
		const value = e.target.value; 

		setCommentData(prevData => {
			prevData[nameOfData] = value;
			return {...prevData};
		});
	}

	const handleComment = async () => {
		setError("");

		if (!name || !comment || !email) {
			setError("All field are required with valid data");
			return;
		}

		if (saveData) {
			window.localStorage.setItem("userData",	JSON.stringify({name, email}));
		} else {
			window.localStorage.removeItem("userData");
		}
	}

	useEffect(() => {
		const userSavedData = localStorage.getItem("userData");

		if (userSavedData) {
			const data = JSON.parse(userSavedData);

			setCommentData(prevData => ({...prevData, ...data}));
		}
	},[]);

	return (
		<div className="bg-white text-black shadow-lg rounded-lg p-8 pb-12 mb-8">
				<h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a Reply</h3>
				<div className="grid grid-cols-1 gap-4 pb-4">
					<textarea
						className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						placeholder="Comment Message..."
						value={comment}
						onChange={e => handleCommentData(e)}
						name="comment"
					/>
					<div className="flex flex-col lg:flex-row gap-4">
						<input
							type="text"
							placeholder="Name"
							value={name}
							onChange={e => handleCommentData(e)}
							name="name"
							className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						/>
						<input
							type="email"
							placeholder="Email"
							value={email}
							onChange={e => handleCommentData(e)}
							name="email"
							className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						/>
					</div>
					<div>
						<input
							type="checkbox"
							id="storeData"
							name="storeData"
							checked={saveData}
							onChange={e => setSaveData(e.target.checked)}
						/>
						<label
							htmlFor="storeData"
							className="ml-2 text-gray-500 cursor-pointer"
						>Save my name, email in this browser for the next time I comment.</label>
					</div>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				<div className="mt-8">
					<button
						onClick={handleComment}
						className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
					>Post Comment</button>
					{showSuccessMessage && <p className="mt-2 text-green-500">Comment submitted for review</p>}
				</div>
		</div>
	);
}