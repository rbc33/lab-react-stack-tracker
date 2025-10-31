import { useParams } from 'react-router-dom'

function TechnologyPage({ technologies }) {
	const { slug } = useParams()
	const tech = technologies.find((t) => t.slug === slug)
	return (
		<div>
			<h1>Technology Details</h1>
			<div className="companyDet">
				<div>
					<img src={tech.image} height="300" />
				</div>
				<div>
					<h2>{tech.name}</h2>
					<p>About</p>
					<p>{tech.description}</p>
				</div>
			</div>
		</div>
	)
}

export default TechnologyPage
