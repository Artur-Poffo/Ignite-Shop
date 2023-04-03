import { Header } from '@/components/Header'
import { CartContextProvider } from '@/contexts/CartContext'
import { globalStyles } from '@/styles/globals'
import { Container } from '@/styles/pages/App'
import type { AppProps } from 'next/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Header />
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
