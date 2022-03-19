import { useRef } from "react";
import emailjs from '@emailjs/browser';
import data from "data";
import Image from "next/image";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

const emailValidate = email => {
	return String(email)
  	.toLowerCase()
 		.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export default function Contact() {
	const form = useRef();

	const { title, contactForm, socialMedia, contactDetails, alerts } = data.contact;

	const sendMessage = e => {
  	e.preventDefault();
  	const { user_name, user_email, message } = form.current;

		if(user_name.value && emailValidate(user_email.value) !== null && message.value) {
			emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
          alert(contactForm.alerts.success);
          form.current.reset();
      }, (error) => {
          alert(contactForm.alerts.fail)
      });
		} else {
			alert(contactForm.alerts.validationFail);
		}
	}

	return (
		<div className="container mx-auto mb-10">
			<div className="text-3xl flex justify-center font-bold text-center mb-7">
				<h2 className="pb-3 px-3 border-b before:absolute before:-bottom-[4.5px] relative before:left-1/2 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">{title}</h2>
			</div>
			<div className="flex flex-col lg:flex-row space-y-4 space-x-12">
				<div className="bg-white text-black pt-7 px-5 pb-5 rounded-lg w-full lg:w-1/2">
					<h3 className="text-xl mb-5">{contactForm.title}</h3>
					<form className="space-y-7" ref={form} onSubmit={sendMessage}>
						{contactForm.inputFields.map(({name, type, placeholder}, index) => (
							<input
								key={index}
								type={type}
								placeholder={placeholder}
								name={name}
								className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
							/>
						))}
						<textarea
							placeholder={contactForm.textareaPlaceholder}
							name="message"
							className="py-2 px-4 mb-6 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
						></textarea>
						<button
							className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-indigo-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
						>{contactForm.buttonName}</button>
					</form>
				</div>
				<div>
					<div>
						<h3 className="text-2xl mb-3">Contact</h3>
						{contactDetails.map(({contactName, image, link},index) => (
							<div key={index} className="flex text-lg">
								<Image
									src={image.url}
									alt={image.alt}
									width={20}
									height={10}
									objectFit="contain"
								/>&nbsp;
								<p>{contactName}:</p>&nbsp;&nbsp;&nbsp;
								<a
									href={link.url}
									target="_blank"
									rel="noreferrer"
									className="hover:text-blue-500 underline transition duration-500"
								>{link.name}</a>
							</div>
						))}
					</div>
					<div className="mt-10">
						<h3 className="text-2xl mb-3">{socialMedia.title}</h3>
						<div>
							{socialMedia.icons.map(({url, image},index) => (
								<a key={index} href={url}>
									<Image
										src={image.url}
										alt={image.alt}
										width={50}
										height={50}
										className="hover:scale-105 transition duration-200"
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}