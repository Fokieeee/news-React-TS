import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SideBar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher/indext"

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {

	const [collapsed, setCollapsed] = useState(true)

	const onToggle = () => {
		setCollapsed(prev => !prev )
	}

	return (
		<div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
			<button onClick={onToggle}>Toggle</button>
			<div className={cls.switchers}>
				<LangSwitcher/>
				<ThemeSwitcher className={cls.lang} />
			</div>
		</div>
	)
}