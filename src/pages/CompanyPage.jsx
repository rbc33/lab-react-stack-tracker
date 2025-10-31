import { useParams } from 'react-router-dom'

function CompanyPage({ companies }) {
	const { companySlug } = useParams()
	const company = companies.find((c) => c.slug === companySlug)
	console.log(company)
	return (
		<div>
			<h1>Company Profile</h1>
			<div className="companyDet">
				<div>
					<img src={company.logo} height="300" />
				</div>
				<div>
					<h2>{company.name}</h2>
					<p>About</p>
					<p>{company.description}</p>
				</div>
			</div>
			<div className="stack">
				{company.techStack.map((st) => (
					<li key={st.slug}>
						<img src={st.image} height="50" />
						<p>{st.name}</p>
					</li>
				))}
			</div>
		</div>
	)
}

export default CompanyPage
