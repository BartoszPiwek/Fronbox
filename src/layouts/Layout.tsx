import React, { ReactNode } from 'react'
import { language } from '../site'

interface ILayout {
	children?: ReactNode
	title: string
	description: string
	ogImage?: string
}

const hasJavascriptTurnOn = {
	__html: [
		`document.documentElement.classList.remove("isScriptsDisabled");`,
		`document.documentElement.classList.add("isLoading");`,
	].join(' '),
}

export const Layout = (params: ILayout) => {
	const { children, title, description, ogImage } = params

	return (
		<html
			className="isScriptsDisabled"
			lang={language}
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

				<title>{title}</title>
				<meta itemProp="name" content={title} />
				<meta name="twitter:title" content={title} />
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
				<meta itemProp="description" content={description} />
				<meta name="twitter:description" content={description} />

				{ogImage && (
					<>
						<meta property="og:image" content={ogImage} />
						<meta name="twitter:card" content={ogImage} />
						<meta name="twitter:image:src" content={ogImage} />
						<meta itemProp="image" content={ogImage} />
					</>
				)}

				<script dangerouslySetInnerHTML={hasJavascriptTurnOn} />
			</head>

			<body>{children}</body>
		</html>
	)
}
