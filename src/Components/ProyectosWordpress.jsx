import About from './About'
import ProyectosItem from './ProyectosItem'

const { proyectos } = About

const ProyectosWordpress = () => {
	return (
		<>
			{proyectos.wordpress.map((proyecto, index) => (
				<ProyectosItem key={index} proyecto={proyecto} />
			))}
		</>
	)
}

export default ProyectosWordpress
