import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../sections/Footer/Footer'
import { Loader } from '../../components/Loader/Loader'
import { Wrap } from '../../components/Wrap/Wrap'
import { Burger } from '../../components/Burger/Burger'
import { Header } from '../../components/Header/Header'
import { Icon } from '../../components/Icon/Icon'
import { ImageElement } from '../../services/image/components/ImageElement/ImageElement'
import { Layout } from '../../layout/Layout'

export const Page = () => {
	return (
		<Layout title="Hello World" description="Template page">
			<Header />
			<Loader></Loader>
			<ImageElement
				src={require(`@images/frontbox.png`)}
				alt="Frontbox Image"
				width={100}
				height={20}
			/>

			<Icon file="close" width={20} height={20}></Icon>

			<Wrap>
				<Burger />
				<Button>Button</Button>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Amet, consequatur, minus corrupti architecto fugit, at
					aliquid ipsum nulla nam maiores repudiandae quia! Aliquam
					tempore veniam maxime? Minima culpa dignissimos ipsum.
				</p>

				<div style={{ height: `4000px` }}></div>
			</Wrap>

			<Footer />
		</Layout>
	)
}

export default ReactDOMServer.renderToStaticMarkup(<Page />)
