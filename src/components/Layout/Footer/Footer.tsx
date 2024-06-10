import { FC } from 'react'

interface FooterProps {
  title: string
}

const Footer: FC<FooterProps> = (props) => {
  const title = props.title

  return (
    <footer>
      <h1>{title}</h1>
    </footer>
  )
}

export default Footer
