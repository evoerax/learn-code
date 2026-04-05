import { Footer, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { NextraSearchDialog } from '@/components/nextra-search-dialog'
import { getPagesFromPageMap } from '@/lib/getPagesFromPageMap'

export const metadata: Metadata = {
    title: {
        default: 'Programming Languages Guide',
        template: '%s — Programming Languages Guide',
    },
    description: 'Explore 80 years of programming language history, from the 1940s to the 2020s.',
}

export default async function RootLayout({
    children,
    params,
}: {
    children: ReactNode
    params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const pageMap = await getPageMap(`/${lang}`)
    const pages = await getPagesFromPageMap({ pageMapArray: pageMap })

    const navbar = (
        <Navbar
            projectLink="https://github.com/evoerax/learn-code"
            logo={<b>PL Guide</b>}
        >
            <LocaleSwitch />
        </Navbar>
    )
    const footer = <Footer>MIT {new Date().getFullYear()} © evoerax</Footer>

    return (
        <html lang={lang} dir="ltr" suppressHydrationWarning>
            <Head>
                <link rel="shortcut icon" href="/images/general/icon.svg" />
            </Head>
            <body>
                <Layout
                    navbar={navbar}
                    footer={footer}
                    pageMap={pageMap}
                    docsRepositoryBase="https://github.com/evoerax/learn-code/tree/main/nextra-docs-starter"
                    search={<NextraSearchDialog pages={pages} />}
                    i18n={[
                        { locale: 'en', name: 'English' },
                        { locale: 'zh', name: '简体中文' },
                    ]}
                    sidebar={{ defaultMenuCollapseLevel: 1 }}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}
