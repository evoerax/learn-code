import { Footer, Layout, LocaleSwitch, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import '../globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { cache } from 'react'
import { NextraSearchDialog } from '@/components/nextra-search-dialog'
import { getPagesFromPageMap } from '@/lib/getPagesFromPageMap'
import { reorderAisPageMap } from '@/lib/reorderAisPageMap'

/** 同一次请求内（含 Strict Mode 双调用）只算一遍 pageMap，减轻 dev 下长时间「卡在加载」的感觉。 */
const getCachedPageMap = cache(async (lang: string) => {
    const raw = await getPageMap(`/${lang}`)
    return reorderAisPageMap(raw) as typeof raw
})

const getCachedPages = cache(async (lang: string) => {
    const pageMap = await getCachedPageMap(lang)
    return getPagesFromPageMap({ pageMapArray: pageMap })
})

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
    const pageMap = await getCachedPageMap(lang)
    const pages = await getCachedPages(lang)

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
