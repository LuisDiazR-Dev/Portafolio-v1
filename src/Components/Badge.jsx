import styled from 'styled-components'
import About from './About'

const Badge = () => {
	return (
		<BadgeStyled className="">
			<a
				className="d-inline-flex"
				key={''}
				href={About.networks.LinkedIn.URL}
				target="_blank"
				rel="noopener noreferrer"
			>
				{About.status}
			</a>
		</BadgeStyled>
	)
}

export default Badge

const BadgeStyled = styled.div`
	display: inline-flex;
	align-items: center;
	font-weight: 600;
	padding: 4px 12px;
	margin-top: 4px;
	border-radius: 25px;
	border: 1px solid #80808055;
	border: 1px solid #0a70d3;

	/* color: #727272; */
	/* color: #7f1d1d; */
	/* color: #7e1328; */
	/* color: crimson; */
	/* border: 1px solid #b4b4b4; */
	/* border: 1px solid #80808055; */
	/* background-color: #80808055; */
	svg {
		width: 1.2rem;
		margin-right: 4px;
	}
`
