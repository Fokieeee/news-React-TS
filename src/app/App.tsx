import { classNames } from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider";
import 'app/styles/index.scss'
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <AppRouter/>
    </div>
  )
}
