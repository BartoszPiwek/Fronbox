import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Button } from '../../components/Button/Button'
import { Footer } from '../../sections/Footer/Footer'
import { Icon } from '../../components/Icon/Icon'
import { ImageElement } from '../../components/ImageElement/ImageElement'
import { Loader } from '../../components/Loader/Loader'
import { Wrap } from '../../components/Wrap/Wrap'
import { Layout } from '../../templates/Layout/Layout'
import { Burger } from '../../components/Burger/Burger'

export const Page = () => {
	return (
		<Layout
			seo={{
				title: 'Hello World',
				description: 'Template page',
			}}
		>
			{/* <Header /> */}
			<Loader></Loader>
			<ImageElement
				src={require('@images/frontbox.png')}
				alt="Aaa"
			></ImageElement>

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

export default ReactDOMServer.renderToStaticMarkup(Page())
