import { FC } from 'react'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = (props) => {
  const title = props.title

  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
