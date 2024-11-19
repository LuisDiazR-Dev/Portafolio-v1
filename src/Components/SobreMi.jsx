import styled from 'styled-components'
import AboutMeIcon from './Icons/AboutMeIcon'

const SobreMi = () => {
	return (
		<SectionStyled id="sobreMi">
			<div className="d-flex align-items-center">
				<AboutMeIcon></AboutMeIcon>
				<h2 className="">Sobre mí</h2>
			</div>

			<div className="row mt-3">
				<div className="col-xs-12 col-sm-8">
					<p>
						Crecí con mi hermano mayor, quien me introdujo al fascinante mundo de las computadoras y al juego de estrategia <em> Age of Empires</em>.
						<span> A partir de esa experiencia, he desarrollado un talento para buscar patrones óptimos en todas mis actividades</span>, y encontré en el desarrollo web el espacio
						perfecto para aprovechar esta aptitud.
					</p>
					<p>
						A lo largo de mi adolescencia, exploré áreas académicas como <span> la mecánica y la electrónica,</span> y aunque aprendí y me parecieron dignos oponentes, no me halle en
						ellas.
					</p>
					<p>
						Hace 2 años me reencontré con el desarrollo web y <span>desde entonces, he dedicado mi tiempo a perfeccionar mis habilidades </span> en esta área en la que, en definitiva, me
						siento a gusto y a pesar de haber empezado con el desarrollo en WordPress, encuentro fascinante el <span>desarrollo de soluciones basadas en software</span>.
					</p>
					<p>
						Soy un padre dedicado de dos hijos y disfruto pasar tiempo en familia. En mi tiempo libre
						<span> me gusta salir en rutas largas con mi bicicleta, lo que me permite relajarme y mantenerme en forma</span>.
					</p>
					<p>
						<span>Mi objetivo profesional</span> es contribuir a proyectos de software innovadores y resolver problemas complejos utilizando tecnología, con un especial interés en
						proyectos relacionados con inteligencia artificial.
					</p>
					<p>
						<span>Siempre emocionado por la oportunidad de colaborar en un entorno desafiante y dinámico.</span>
					</p>
				</div>
				<div className=" imgBox col-xs-12 col-sm-4 px-0">
					<ImgStyled className="rounded" src="https://raw.githubusercontent.com/LuisDiazR-Dev/LuisDiazR-Dev.github.io/main/src/assets/logoSelf-RuleTheWorld.jpg" alt="Logo Self" />
				</div>
			</div>
		</SectionStyled>
	)
}

export default SobreMi

const SectionStyled = styled.section`
	/* border: 1px solid red; */
	margin-top: 96px;

	h2 {
		font-weight: 600;
		margin-bottom: 0;
	}
	span {
		color: #d02020;
		font-weight: 600;
	}
	svg {
		width: 2rem;
		margin-right: 12px;
	}
	div.imgBox {
		/* border: 1px solid green; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 576px) {
		.row {
			flex-direction: column-reverse;
		}
	}
`
const ImgStyled = styled.img`
	/* border: 1px solid red; */
	padding: 24px 0;

	@media (min-width: 576px) {
		transform: rotate(-90deg);
		width: auto;
		height: 256px;
		padding: 24px 0;
	}
`
