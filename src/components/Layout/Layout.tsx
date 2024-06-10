import { FC, PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header title="Cabecera" />
      <main>{children}</main>
      <Footer title="Footer" />
    </div>
  )
}

export default Layout
