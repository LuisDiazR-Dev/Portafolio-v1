import About from './About'
import ProyectosItem from './ProyectosItem'

const { proyectos } = About

const ProyectosFullStack = () => {
	return (
		<>
			{proyectos.fullStack.map((proyecto, index) => (
				<ProyectosItem key={index} proyecto={proyecto} />
			))}
		</>
	)
}

export default ProyectosFullStack
