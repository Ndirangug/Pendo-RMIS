import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { back } from '@redwoodjs/router'

const PageHeader = ({ title }) => {
  return (
    <header className="flex items-center prose prose-base">
      <IconButton onClick={back}>
        <ArrowBack />
      </IconButton>
      <h1 className="font-bold">{title}</h1>
    </header>
  )
}

export default PageHeader
