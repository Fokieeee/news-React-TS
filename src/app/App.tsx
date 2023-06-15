import { classNames } from "shared/lib/classNames/classNames"
import { Link, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss'

export const App = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
