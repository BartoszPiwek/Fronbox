import React from 'react'

export interface ISEO {
	title: string
	description: string
	ogImage?: string
}

export const SEO = (params: ISEO) => {
	const { title, description, ogImage } = params

	return (
		<>
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
		</>
	)
}
