import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { proxy as nextraLocaleProxy } from 'nextra/locales'

/**
 * Nextra 的 locales proxy 在「路径已带语言且与 Cookie 一致」时会返回 `undefined`，
 * Next.js 16 的 proxy 需要明确继续链路，否则少数环境下会出现文档一直 Loading。
 */
export function proxy(request: NextRequest) {
    const res = nextraLocaleProxy(request)
    if (res) return res
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)',
    ],
}
