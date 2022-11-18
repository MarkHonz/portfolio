import styles from './Projects.module.scss';
import faceFinder from '../../assets/images/face-finder.png';
import cookingNinja from '../../assets/images/cooking-ninja.png';
import magicMemory from '../../assets/images/magic-memory.png';

const Projects = () => {
	const projectList = [
		{
			id: 1,
			title: 'face location app',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem consequatur illum. Eum temporibus autem nemo dolores molestiae ipsum, numquam perferendis, ipsa dolorum alias quas sint vitae id culpa laudantium similique. Voluptas id animi aliquam. Veniam facilis, iusto dolores nobis nulla, maiores atque deserunt quod vero aspernatur eaque ut minus!`,
			imgUrl: faceFinder,
			liveUrl: 'https://face-find-app.herokuapp.com/',
			codeUrl: 'https://github.com/MarkHonz/face-finder',
			apiUrl: 'https://github.com/MarkHonz/face-finder-api',
		},
		{
			id: 2,
			title: 'cooking ninja',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem consequatur illum. Eum temporibus autem nemo dolores molestiae ipsum, numquam perferendis, ipsa dolorum alias quas sint vitae id culpa laudantium similique. Voluptas id animi aliquam. Veniam facilis, iusto dolores nobis nulla, maiores atque deserunt quod vero aspernatur eaque ut minus!`,
			imgUrl: cookingNinja,
			liveUrl: 'https://MarkHonz.github.io/cooking-ninja',
			codeUrl: 'https://github.com/MarkHonz/cooking-ninja',
			apiUrl: '',
		},
		{
			id: 3,
			title: 'magic memory game',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem consequatur illum. Eum temporibus autem nemo dolores molestiae ipsum, numquam perferendis, ipsa dolorum alias quas sint vitae id culpa laudantium similique. Voluptas id animi aliquam. Veniam facilis, iusto dolores nobis nulla, maiores atque deserunt quod vero aspernatur eaque ut minus!`,
			imgUrl: magicMemory,
			liveUrl: 'https://MarkHonz.github.io/magic-memory-game',
			codeUrl: 'https://github.com/MarkHonz/magic-memory-game',
			apiUrl: '',
		},
	];

	return (
		<section className={styles.projects}>
			<h2>Projects</h2>
			{projectList.map(
				({ id, title, description, imgUrl, liveUrl, codeUrl, apiUrl }) => (
					<div className={styles.projectContainer} key={id}>
						<div className={styles.left}>
							<h3>{title}</h3>
							<p>{description}</p>
							<div className={styles.links}>
								<a
									href={liveUrl}
									className="btn btn--green"
									target="_blank"
									rel="noopener noreferrer"
								>
									live
								</a>
								<a
									href={codeUrl}
									className="btn btn--green"
									target="_blank"
									rel="noopener noreferrer"
								>
									code
								</a>
								{apiUrl && (
									<a
										href={apiUrl}
										className="btn btn--green"
										target="_blank"
										rel="noopener noreferrer"
									>
										api
									</a>
								)}
							</div>
						</div>
						<div
							className={styles.right}
							style={{
								backgroundImage: `url(${imgUrl})`,
							}}
						></div>
					</div>
				)
			)}
		</section>
	);
};

export default Projects;
