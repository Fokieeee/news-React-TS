import { classNames } from "shared/lib/classNames/classNames"
import cls from "./ThemeSwitcher.module.scss"
import { Theme, useTheme } from "app/providers/ThemeProvider"
import LightIcon from "shared/assets/icons/theme-light.svg"
import DarkIcon from "shared/assets/icons/theme-dark.svg"
import { Button } from "shared/ui/Button/Button"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

	const { theme ,toggleTheme } = useTheme()

	const themeIcon = () => {
		if ( theme === Theme.LIGHT) {
			return <LightIcon />
		} else if (theme === Theme.DARK) {
			return <DarkIcon />
		}
	}

	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{themeIcon()}
		</Button>
	)
}
