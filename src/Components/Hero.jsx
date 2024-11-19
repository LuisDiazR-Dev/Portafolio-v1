import styled from 'styled-components'
import About from './About'
import SocialBtn from './SocialBtn'
import Badge from './Badge'

const Hero = () => {
	return (
		<SectionStyled className="mt-5">
			<img src={About.imgProfile} alt="foto de perfil" />

			<Badge />

			<h1>Hola, Soy {About.name} </h1>
			<p>
				{About.detailsA}
				<strong>{About.emphasis}</strong>
				{About.detailsB}
			</p>

			<SocialBtn />
		</SectionStyled>
	)
}

export default Hero

const SectionStyled = styled.section`
	max-width: 80ch;
	/* margin-top: 2rem; */

	/* border: 1px solid #80808055; */
	/* text-wrap: pretty; */
	h1 {
		font-weight: bold;
		font-size: 2.7rem;
	}

	img {
		width: 72px;
		margin-right: 1rem;
	}

	strong {
		color: crimson;
		color: #7f1d1d;
		color: #7e1328;
		color: #d02020;
	}
	p {
		font-weight: 600;
	}
`
