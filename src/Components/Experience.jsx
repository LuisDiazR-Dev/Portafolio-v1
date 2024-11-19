import styled from 'styled-components'
import BriefCase from './Icons/BriefCase'
import ExperienceItem from './ExperienceItem'

const Experience = () => {
	return (
		<SectionStyled id="experience">
			<div className="experience-title d-flex align-items-center">
				<BriefCase></BriefCase>
				<h2 className="">Experiencia laboral</h2>
			</div>

			<div className="mt-4">
				<ExperienceItem></ExperienceItem>
			</div>
		</SectionStyled>
	)
}

export default Experience

const SectionStyled = styled.section`
	/* border: 1px solid red; */
	margin-top: 96px;

	h2 {
		font-weight: 600;
		margin-bottom: 0;
	}

	svg {
		width: 1.8rem;
		margin-right: 12px;
	}
`
