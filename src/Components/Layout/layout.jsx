import {Header} from "../Header/header"
import {Footer} from "../Footer/footer"

export const Layout = ({children}) => {
  return (
    <>
    <main>
      {children}
    </main>
    </>
  )
}
