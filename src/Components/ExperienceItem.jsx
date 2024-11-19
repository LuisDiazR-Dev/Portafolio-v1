import About from './About'
import styled from 'styled-components'

const ExperienceItem = () => {
	const { experience } = About
	return (
		<>
			{experience.map((exp, index) => (
				<ItemStyled key={index}>
					<div className="row pb-5">
						<div className="col-12 col-sm-5">
							<h3>{exp.cargo}</h3>
							<h4>{exp.empresa}</h4>
							<time>{exp.periodo}</time>
						</div>

						<div className="col-12 mt-3 col-sm-7 mt-sm-0">
							<p>{exp.description}</p>
						</div>
					</div>
				</ItemStyled>
			))}
		</>
	)
}

export default ExperienceItem

const ItemStyled = styled.div`
	border-left: 2px solid #d02020;
	padding: 0 0 0 36px;
	position: relative;

	div.row:before {
		position: absolute;
		content: '';
		display: block;
		width: 1rem;
		height: 1rem;
		background-color: #d02020;
		border-radius: 50%;

		top: 10px;
		left: -8px;
	}

	h3 {
		color: #d02020;
		font-weight: 700;
	}
	h4 {
		font-weight: 600;
	}

	p {
		/* margin: 0; */
		/* padding: 0; */
		/* text-wrap: balance; */
		/* text-wrap: pretty; */
	}
`
