import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  return (
    <>
      <header className="bg-gray-200 w-full h-8 px-2 flex items-center">
        <Link to={routes.home()} className="grow">
          Today I Learned
        </Link>
        {/* <button onClick={logIn}>Log In</button> */}
        {/* <button onClick={isAuthenticated ? logOut : logIn}>
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button> */}
        <button
          onClick={async () => {
            if (isAuthenticated) {
              await logOut({ returnTo: process.env.AUTH0_REDIRECT_URI })
            } else {
              const searchParams = new URLSearchParams(window.location.search)
              await logIn({
                appState: { targetUrl: searchParams.get('redirectTo') },
              })
            }
          }}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
      </header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
