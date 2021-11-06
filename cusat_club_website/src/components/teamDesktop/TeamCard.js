import React from "react";
import "../../arrow.css"
import { StyleSheet, css } from "aphrodite";
import Img from "../../assets/logo/img.jpg";
import { COLORS } from "../../styles/Constants";
import Team from "../../assets/icons/Teams 2nd page.png";
import Mail from "../../assets/icons/MAIL.png";
import Link from "../../assets/icons/linkedin.png";


const Main = () => {
	return (
		<div className={css(styles.root)}>
			<div className={css(styles.box)}>
			<div className={css(styles.titleBox)}>
					<img src={Team} alt="icn" className={css(styles.titleIcon)} />
					<span className={css(styles.title)}>
						CUSAT CLUBS TEAM
					</span>
				</div>
				<div className={css(styles.row)}>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Maya Menon</div>
								<div className={css(styles.desig)}>Faculty Incharge</div>
								<div className={css(styles.dep)}>SOE, CUSAT</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:maya.menon@cusat.ac.in" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/maya-menon-50bb675/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Utkarsh Raj</div>
								<div className={css(styles.desig)}>CUSAT CLUB Lead</div>
								<div className={css(styles.dep)}>S7 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:utkarsh02dec@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/utkarsh-raj-906917171/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Rafi Rasheed</div>
								<div className={css(styles.desig)}>Hack Club CUCEK - Lead</div>
								<div className={css(styles.dep)}>S7 EC</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:mail@rafirasheed.co" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/rafitc/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Muhammed Ayimen</div>
								<div className={css(styles.desig)}>Web Developer</div>
								<div className={css(styles.dep)}>S5 IT</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:aiymenlatheef03@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/aiymenlatheef/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Ashwin Anil</div>
								<div className={css(styles.desig)}>Poster Designer</div>
								<div className={css(styles.dep)}>S5 IT</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:anilashwin2001@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/ashwin-anil-097161190/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Abhinav Rajesh</div>
								<div className={css(styles.desig)}>Youtube Handle, Video Editing</div>
								<div className={css(styles.dep)}>S5 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:abhinavrajesh49@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/abhinavrajesh/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Ajal P</div>
								<div className={css(styles.desig)}>TinkerHub SOE - Lead</div>
								<div className={css(styles.dep)}>S5 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:ajal.p1999@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/ajal/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Vyshnav KS</div>
								<div className={css(styles.desig)}>Web Developer</div>
								<div className={css(styles.dep)}>S5 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:vyshnavks85@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/vyshnav-ks-a5b5351a5/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Anusha Maiti</div>
								<div className={css(styles.desig)}>Social Media Manager</div>
								<div className={css(styles.dep)}>S5 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:anushamr141022@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/anusha-maiti-533115198" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Anju Suresh</div>
								<div className={css(styles.desig)}>Designing Team</div>
								<div className={css(styles.dep)}>S5 IT</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:anjusuresh2001@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/anjusuresh10" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Arya Suresh</div>
								<div className={css(styles.desig)}>Designing Team</div>
								<div className={css(styles.dep)}>S5 IT</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:aryasuresh9876@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/arya-suresh-a56797179" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Bharath Chandran S</div>
								<div className={css(styles.desig)}>Hermes Cusat - Lead</div>
								<div className={css(styles.dep)}>S7 MECH</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:bharathchandran64@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/bharath-chandran-s-973396201/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Aiswarya A Pisharody</div>
								<div className={css(styles.desig)}>Chair, IEEE CUSAT SB</div>
								<div className={css(styles.dep)}>S7 EEE</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:aiswaryaarun4@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/aiswarya-a-pisharody-9b8949169" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Sreelakshmi</div>
								<div className={css(styles.desig)}>Content Team</div>
								<div className={css(styles.dep)}>S3 CIVIL</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:jsreelakshmi70@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/sreelakshmi-j-30a802204" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>R.Nehha Mariam</div>
								<div className={css(styles.desig)}>President - IRES-SEDS</div>
								<div className={css(styles.dep)}>S5 EC</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:Rknmariam@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/nehhamariamrenju" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Aswathi NJ</div>
								<div className={css(styles.desig)}>CUCEK Representative</div>
								<div className={css(styles.dep)}>S7 EC</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:aswathinj@ug.cusat.ac.in" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/aswathi-nj" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Vasant Joseph</div>
								<div className={css(styles.desig)}>EC Branch Rep</div>
								<div className={css(styles.dep)}>S5 EC</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:vasantjoseph@live.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/vasantjoseph/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Abhinav TB</div>
								<div className={css(styles.desig)}>Discord Moderator</div>
								<div className={css(styles.dep)}>S5 CS</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:abhinavtb@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/abhinav-t-b-226172190/" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Pratheeksha Prakash</div>
								<div className={css(styles.desig)}>Content Team</div>
								<div className={css(styles.dep)}>S7 EC</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:pratheekshaprakash0108@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/pratheeksha-prakash" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Midhuna Pavithran</div>
								<div className={css(styles.desig)}>EEE Branch Rep</div>
								<div className={css(styles.dep)}>S5 EEE</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:midhunapavi05@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/midhuna-pavithran-aab7161b7" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
					<div className={css(styles.profile_card)}>
						<div className={css(styles.profile_content)}>
							<div className={css(styles.profile_image)}>
								<img src={Img} alt="first user" className={css(styles.img)}/>
							</div>
							<div className={css(styles.desc)}>
								<div className={css(styles.name)}>Aswanth KT</div>
								<div className={css(styles.desig)}>Chair, SAE CUSAT</div>
								<div className={css(styles.dep)}>S7 MECH</div>
								<hr className={css(styles.hr)}/>
								<div className={css(styles.link)}>
									<a href="mailto:aswanth.kt.1@gmail.com" target='_blank' rel="noopener noreferrer"><span className="dot1"><img src={Mail} alt="icn" className="Social"/></span></a>
									<a href="https://www.linkedin.com/in/aswanth-kt-366b31197" target='_blank' rel="noopener noreferrer"><span className="dot1 dot2"><img src={Link} alt="icn" className="Social1"/></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
        	</div>
		</div>
	);
};

const styles = StyleSheet.create({
	root: {
		marginTop: 27,
		marginLeft: 57,
		marginRight: 57,
		justifyContent: "center",
		alignItems: "center",
	},
	box: {
		width: "100%",
		padding: "25px",
		borderRadius: "20px",
		background: "transparent linear-gradient(180deg, #4ECDB0 0%, #407ACE 100%) 0% 0% no-repeat padding-box",
	},
	row: {
		display: "grid",
		justifyItems: "center",
		justifyContent: "center",
		gridTemplateColumns: "auto auto auto auto auto", 
		gridColumnGap: 5,
	},
	titleBox: {
		maxWidth: 820,
		width: "auto",
		height: 58,
		borderRadius: 7,
		display: "flex",
		flexDirection: "row",
		// justifyContent: "center",
		alignItems: "center",
		paddingLeft: 15,
		paddingRight: 15,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		lineHeight: "50px",
		color: COLORS.primary,
	},
	titleIcon: {
		marginRight: 11,
		width: "40px",
		height: "40px"
	},
	social: {
		width: "20px",
		height: "20px"
	},
	link: {
		marginTop: "10px",
		marginBottom: "5px",
		marginLeft: "20px"
	},  
	profile_card: {
		backgroundColor: "#ffffff",
		width: "250px",
		height: "325px",
		borderRadius: "20px",
		margin: "20px 11px 10px 11px",
	},
	profile_content: {
		padding:"15px",
		paddingTop: "28px",
	},
	img: {
		width: "160px",
		height: "154px",
		borderRadius: "20px",
	},
	profile_image: { 
		textAlign: "center",
	},
	desc: {
		textAlign: "center",
	},
	name: {
		color: "#3B3735",
		fontSize: "18px",
		fontWeight: 900,
		marginTop: "10px",
	},  
	desig: {
	fontSize: "15px",
	fontWeight: "bold",
	color: "#3B3735",
	marginTop: "5px",
	},
	dep: {
		color: "#3B3735",
		fontSize: "15px",
		marginTop: "5px",
	},
	hr: {
		height:"2px",
		borderWidth:0,
		border: "1px solid #428AC7",
		background: "#428AC7",
		borderRadius: "50px",
		marginLeft: "11px",
		marginRight: "11px",
		marginTop: "10px",
	},
});

export default Main;
