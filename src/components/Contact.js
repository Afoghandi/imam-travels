import React, { Component } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import Title from "./Title";

class Contact extends Component {
	state = {
		contactDetails: [
			{
				icon: <MdPermContactCalendar />,
				location: " Find Us In Lagos",
				address:
					"Block 47, Flat 90 Oluwole Ogba Housing estate, Abiodun Jagun Way, OPP. Sunday Market, Ogba Bust stop, Ogba, Lagos",
			},

			{
				icon: <MdContactMail />,
				location: " Find Us In Abuja",
				address:
					"Suite A 31, 2nd Floor, Area 11 Shopping Mall Off Ahmadu Bello Way Garki, Abuja",
			},
			{
				icon: <MdContactPhone />,
				location: " call or email us",
				address: "080-332-21304, 078-778-6486, 080-230-84296, 081-388-19901 ",
				email: "independentimam6013@gmail.com",
			},
		],
	};
	render() {
		return (
			<>
				<section className="services">
					<Title title="Our Offices" />
					<div className="services-center">
						{this.state.contactDetails.map((item, index) => {
							return (
								<article key={index} className="service">
									<span>{item.icon} </span>
									<h6> {item.location}</h6>
									<p>{item.address} </p>
									<p> {item.email} </p>
								</article>
							);
						})}
					</div>
				</section>
			</>
		);
	}
}

export default Contact;
