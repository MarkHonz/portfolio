import resume from '../../assets/files/Mark_Honsinger.pdf';

const HireMeButton = () => {
	return (
		<a
			href={resume}
			download="Mark_Honsinger"
			target="_blank"
			rel="noreferrer"
			className="btn btn--white btn--animated"
		>
			Resume
		</a>
	);
};

export default HireMeButton;
