import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { GradientElipse } from "@/components/GradientElipse"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CurrentWork } from "@/components/currentWork"
import { DownloadCurriculum } from "@/components/downloadCurriculum"
import { SocialMedias } from "@/components/socialMedias"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoUp } from "@/components/goUp"
import Script from "next/script"

const inter = Inter({
	subsets: ["latin"],
	style: ["normal"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
})

export const metadata: Metadata = {
	title: "Gustavo Silvério",
	description: "A full-stack developer!",
	authors: [{ name: "Gustavo Silvério", url: "https://www.gsilverio.com/" }],
	creator: "Gustavo Silvério",
	keywords:
		"Gustavo Silvério, Gustavo Oliveira, developer, desenvolvedor, full-stack, frontend, backend, programador",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<meta
					property="og:image"
					content="https://i.imgur.com/lC02sAn.png"
				/>
				<meta
					property="og:site_name"
					content="Gustavo Silvério | Portfolio"
				/>
				<meta
					property="og:title"
					content="Gustavo Silvério | Portfolio"
				/>
				<meta
					property="og:description"
					content="A full-stack developer!"
				/>
				<meta
					property="og:url"
					content="https://www.gsilverio.com/"
				/>
				<Script
					id="clarity-script"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
							(function(c,l,a,r,i,t,y){
							c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
							t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
							y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "i2bgq9i36n");
						`,
					}}
				/>
			</head>
			<body className={`${inter.className}`}>
				<Header />
				<main>{children}</main>
				<GoUp />
				<SpeedInsights />
				<Analytics />
				<GradientElipse side="bottom" />
				<SocialMedias />
				<CurrentWork />
				<DownloadCurriculum />
				<Footer />
			</body>
		</html>
	)
}
