import React, { ReactNode } from 'react'
import { ISEO, SEO } from '../../components/SEO/SEO'

interface ILayout {
	children?: ReactNode

	seo: ISEO
}

const hasJavascriptTurnOn = {
	__html: `
			document.documentElement.classList.remove("isScriptsDisabled")
			document.documentElement.classList.add("isLoading");
		`,
}

export const Layout = (params: ILayout) => {
	const { children, seo } = params

	return (
		<html
			className="isScriptsDisabled"
			lang="en"
			itemScope
			itemType="http://schema.org/WebPage"
			dir="ltr"
			prefix="og: http://ogp.me/ns#"
		>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,minimum-scale=1,initial-scale=1"
				/>
				<meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
				<meta
					name="format-detection"
					content="telephone=no,date=no,address=no,email=no,url=no"
				/>

				<SEO {...seo} />

				<script dangerouslySetInnerHTML={hasJavascriptTurnOn} />
			</head>

			<body>{children}</body>
		</html>
	)
}
