import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { Layout } from '../../layouts/Layout'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Burger } from '../../utilities/component/Burger/Burger'
import { Button } from '../../utilities/component/Button/Button'
import { Icon } from '../../utilities/component/Icon/Icon'
import { Loader } from '../../utilities/component/Loader/Loader'
import { Wrap } from '../../utilities/component/Wrap/Wrap'
import { ImageElement } from '../../services/lazyload/components/ImageElement/ImageElement'

class Page extends React.Component {
	render() {
		return (
			<Layout title="Hello World" description="Template page">
				<Header />
				<Loader></Loader>
				<div style={{ width: 100 }}>
					<ImageElement
						image={require('@images/frontbox.png?{sizes: [50, 100]}')}
						alt="Frontbox Image"
					/>
				</div>

				<Icon file="close" width={20} height={20}></Icon>

				<Wrap>
					<Burger />
					<Button>Button</Button>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Amet, consequatur, minus corrupti architecto fugit, at
						aliquid ipsum nulla nam maiores repudiandae quia!
						Aliquam tempore veniam maxime? Minima culpa dignissimos
						ipsum.
					</p>

					<div style={{ height: `4000px` }}></div>
				</Wrap>

				<Footer />
			</Layout>
		)
	}
}

export default ReactDOMServer.renderToStaticMarkup(<Page />)
