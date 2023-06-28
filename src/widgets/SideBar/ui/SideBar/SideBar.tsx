import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SideBar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher/indext"
import { useTranslation } from "react-i18next"

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
	const [collapsed, setCollapsed] = useState(false)
	const { t } = useTranslation()

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
				className,
			])}
		>
			<button data-testid="sidebar-toggle" onClick={onToggle}>
				{t("toggle")}
			</button>
			<div className={cls.switchers}>
				<LangSwitcher />
				<ThemeSwitcher className={cls.lang} />
			</div>
		</div>
	)
}
