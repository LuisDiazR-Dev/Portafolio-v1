import styled from 'styled-components'

const Navbar = () => {
	return (
		<div className="text-center ">
			<NavbarStyled className="row  mx-auto mt-3 mb-3  p-2   d-inline-flex  row-cols-auto ">
				<a className="" href="#experience">
					Experiencia
				</a>
				<a className=" " href="#proyectos">
					Proyectos
				</a>
				<a className="" href="#sobreMi">
					Sobre mí
				</a>
				<a className="" href="#contacto">
					Contacto
				</a>
			</NavbarStyled>
		</div>
	)
}
export default Navbar

const NavbarStyled = styled.nav`
	/* background-color: #dfdede; */
	border: 1px solid #80808055;

	border-radius: 25px;
	font-weight: 600;
	font-size: 0.9rem;

	button {
		background-color: transparent;
		padding: 5px;
		transition: all 0.1s ease;

		&:hover {
			transform: scale(1.2); /* Cambia el tamaño en un 10% más grande */
		}
	}

	a {
		/* display: inline-block; */
		color: #565656;
		&:hover {
			color: orange;
			color: #d02020;
		}
	}
`
