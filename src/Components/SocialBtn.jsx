import styled from 'styled-components'
import About from './About'

const SocialBtn = () => {
	const { networks } = About

	return (
		<NavSocialStyled>
			{Object.entries(networks).map(([network, data], index) => (
				<AnchorBtn className="d-inline-flex me-3" key={index} href={data.URL} target="_blank" rel="noopener noreferrer">
					{data.logo}
					{network}
				</AnchorBtn>
			))}
		</NavSocialStyled>
	)
}

export default SocialBtn
export { AnchorBtn }

const NavSocialStyled = styled.nav`
	display: flex;
	flex-wrap: wrap;

	svg {
		width: 1.2rem;
		margin-right: 4px;
	}
`

const AnchorBtn = styled.a`
	font-size: 1.1rem;
	font-weight: 600;
	padding: 4px 12px;
	margin-top: 4px;
	border-radius: 25px;

	color: #727272;
	background-color: white;
	border: 1px solid #b4b4b4;
	border: 1px solid #80808055;
	/* background-color: darkgray; */

	&:hover {
		color: white;
		border: 1px solid black;
		background-color: black;
	}
`
