import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import React from 'react'
import '../styles/reset.css'
import '../styles/font.css'
import '../styles/colors.css'
import '../styles/spacing.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
