import data from "data";
import { AboutStatusCard, AboutContent, StaffCard } from ".";

export default function About() {
	const { sectionTitle, status, aboutContent, staff, topTeachers} = data.about;

	return (
		<div className="container mx-auto my-8">
			<div className="text-3xl flex justify-center font-bold text-center mb-7">
				<h2 className="pb-3 px-3 border-b before:absolute before:-bottom-[4.5px] relative before:left-1/2 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">{sectionTitle}</h2>
			</div>
			<div className="flex-col sm:flex-row items-center sm:space-y-0 space-y-4 flex sm:justify-evenly">
				{status.map((statusData,index) => <AboutStatusCard key={index} {...statusData} />)}
			</div>
			<AboutContent {...aboutContent} />
			<div className="mt-8 flex-col sm:flex-row items-center sm:space-y-0 space-y-4 flex sm:justify-evenly">
				{staff.main.map((staffData,index) => <StaffCard key={index} {...staffData} />)}
			</div>
			{staff.topStaff.map(({title, staffData},index) => (
				<div key={index} className="mt-8">
					<h3 className="text-center text-3xl font-semibold">{title}</h3>
					<div className="mt-4 flex-col sm:flex-row items-center sm:space-y-0 space-y-4 flex sm:justify-evenly">
						{staffData.map((item,index) => <StaffCard key={index} {...item} />)}
					</div>
				</div>
			))}
		</div>
	);
}