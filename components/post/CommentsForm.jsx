import { useState, useRef, useEffect } from "react";
import { submitComment } from "services";
import data from "data";

const emailValidate = email => {
	return String(email)
  	.toLowerCase()
 		.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default function CommentsForm({ slug }) {
	const [error, setError] = useState("");
	const [saveData, setSaveData] = useState(false);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [commentData, setCommentData] = useState({
		userName: "",
		userEmail: "",
		comment: "",
		slug
	});

	const { title, checkoutText, alerts, placeholders } = data.post.comments.commentsForm;
	const {userName, userEmail, comment} = commentData;

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

		if (!userName || !comment || !emailValidate(userEmail)) {
			setError(alerts.fail);
		 	setTimeout(() => {
				setError("");
		 	}, 3000);
			return;
		}

		if (saveData) {
			window.localStorage.setItem("userData",	JSON.stringify({name, email}));
		} else {
			window.localStorage.removeItem("userData");
		}

		submitComment(commentData)
		 .then(res => {
		 	setShowSuccessMessage(true);
		 	setTimeout(() => {
		 		setShowSuccessMessage(false);
		 	}, 3000);
		 })
		 .catch(err => {
		 		console.error("Submit Comment Error at Client side  ",err);
		 		setError(err.message);
		 });
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
				<h3 className="text-xl mb-8 font-semibold border-b pb-4">{title}</h3>
				<div className="grid grid-cols-1 gap-4 pb-4">
					<textarea
						className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						placeholder={placeholders.textarea}
						value={comment}
						onChange={e => handleCommentData(e)}
						name="comment"
					/>
					<div className="flex flex-col lg:flex-row gap-4">
						<input
							type="text"
							placeholder={placeholders.name}
							value={userName}
							onChange={e => handleCommentData(e)}
							name="userName"
							className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						/>
						<input
							type="email"
							placeholder={placeholders.email}
							value={userEmail}
							onChange={e => handleCommentData(e)}
							name="userEmail"
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
						>{checkoutText}</label>
					</div>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				<div className="mt-8">
					<button
						onClick={handleComment}
						className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
					>{placeholders.button}</button>
					{showSuccessMessage && <p className="mt-2 text-green-500">{alerts.success}</p>}
				</div>
		</div>
	);
}