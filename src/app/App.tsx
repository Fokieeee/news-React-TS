import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import "app/styles/index.scss"
import { AppRouter } from "./providers/router"
import { Navbar } from "widgets/Navbar"
import { SideBar } from "widgets/SideBar"

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  )
}
