import styled from 'styled-components'
import { AnchorBtn } from './SocialBtn'

const Footer = () => {
	return (
		<FooterStyled className="container text-center " id="contacto">
			<div className="row">
				<div className="box-1 rounded">
					<h2>¡Contácteme!</h2>
					<h4>Y creemos un proyecto juntos</h4>
				</div>

				<div className="box-2 d-flex flex-wrap justify-content-center ">
					<AnchorBtn href="https://wa.link/sfaq99" target="_blank" rel="noopener noreferrer">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" alt="logo WhatsApp" />
						WhatsApp
					</AnchorBtn>
					<AnchorBtn href="mailto:diazr.info@gmail.com" target="_blank" rel="noopener noreferrer">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/320px-Gmail_icon_%282020%29.svg.png" alt="Logo Gmail" />
						ail
					</AnchorBtn>
					<AnchorBtn href="https://www.linkedin.com/in/luis-diazr/" target="_blank" rel="noopener noreferrer">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/240px-LinkedIn_icon.svg.png" alt="Logo LinkedIn" />
						LinkedIn
					</AnchorBtn>
				</div>

				<div className="box-3 d-flex flex-column">
					<span>Creado por LuisDíazR-Dev | 2024</span>
					<span>Casi todos los derechos reservados.</span>
					<span>
						Basado en <a href="https://github.com/LuisDiazR-Dev/LuisDiazR-Dev.github.io/blob/main/README.md">MiduDev | FreeCodeCamp</a>
					</span>
					<span>...if you want true change, start with your-Self™ </span>
				</div>
			</div>
		</FooterStyled>
	)
}

export default Footer

const FooterStyled = styled.footer`
	/* border: 1px solid #e49b9b; */

	margin-top: 96px;
	/* height: 12rem; */

	div {
		padding: 12px 0;
	}

	div.box-1 {
		padding: 12px 24px;
	}

	div.box-2 {
		padding-bottom: 24px;
		img {
			width: 24px;
			padding-right: 4px;
			margin-bottom: 2px;
		}
		a {
			margin: 4px 12px;
		}
	}

	div.box-3 {
		width: 75%;
		margin: auto;
		border-top: 2px dotted #d0202075;

		font-size: 0.9rem;
		font-weight: 500;
	}
`
