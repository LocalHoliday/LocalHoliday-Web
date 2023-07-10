import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import React from 'react'
import '../styles/reset.css'
import '../styles/font.css'
import '../styles/colors.css'
import '../styles/spacing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '@/components/Common/Footer'
import Nav from '@/components/Common/Nav'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  )
}
