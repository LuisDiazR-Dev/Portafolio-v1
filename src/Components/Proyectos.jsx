import styled from 'styled-components'
import CodeSlash from './Icons/CodeSlash'
import ProyectosWordpress from './ProyectosWordpress'
import ProyectosFullStack from './ProyectosFullStack'
import { useState } from 'react'

const Proyectos = () => {
	const [activeTab, setActiveTab] = useState('wordpress')

	const handleTabClick = (category) => {
		setActiveTab(category)
	}

	return (
		<SectionStyled id="proyectos">
			<div className="d-flex align-items-center">
				<CodeSlash></CodeSlash>
				<h2 className="">Proyectos</h2>
			</div>

			{/* tabs */}
			<div className="mt-4">
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<a
							className={`nav-link ${activeTab === 'wordpress' ? 'active' : ''}`}
							aria-current={activeTab === 'wordpress' ? 'page' : undefined}
							onClick={() => handleTabClick('wordpress')}
						>
							Wordpress
						</a>
					</li>
					<li className="nav-item">
						<a
							className={`nav-link ${activeTab === 'fullstack' ? 'active' : ''}`}
							aria-current={activeTab === 'fullstack' ? 'page' : undefined}
							onClick={() => handleTabClick('fullstack')}
						>
							Full Stack
						</a>
					</li>
				</ul>

				<div id="content-tab">
					{activeTab === 'wordpress' && <ProyectosWordpress />}
					{activeTab === 'fullstack' && <ProyectosFullStack />}
				</div>
			</div>
		</SectionStyled>
	)
}

export default Proyectos

const SectionStyled = styled.section`
	/* border: 1px solid red; */
	margin-top: 96px;
	justify-content: center;
	align-items: center;
	min-height: 512px;

	/* text-align: center; */
	/* margin: auto; */

	h2 {
		font-weight: 600;
		margin-bottom: 0;
	}

	svg {
		width: 1.8rem;
		margin-right: 12px;
	}
	a.nav-link {
		cursor: pointer;
		color: gray; /* Color predeterminado */
		&.active {
			color: #d02020 !important;
			font-weight: 700;
		}
		&:hover {
			color: #d02020;
			background: none;
		}
	}
`
