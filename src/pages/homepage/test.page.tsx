import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Layout } from '../../layouts/Layout';

class Page extends React.Component {
	render() {
		return (
			<Layout title="Hello World" description="Template page">
				<Header />
				<Footer />
			</Layout>
		);
	}
}

export default ReactDOMServer.renderToStaticMarkup(<Page />);
