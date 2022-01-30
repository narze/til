import { Link, routes } from '@redwoodjs/router'
type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <header className="bg-gray-200 w-full h-8 px-2 flex items-center">
        <Link to={routes.home()}>Today I Learned</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
