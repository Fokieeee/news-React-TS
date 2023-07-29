import { classNames } from "shared/lib/classNames/classNames"
import cls from "./SideBar.module.scss"
import { useState } from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher/indext"
import { useTranslation } from "react-i18next"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import MainPageIcon from "shared/assets/icons/main-page-icon.svg"
import AboutPageIcon from "shared/assets/icons/about-icon.svg"

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
			<div className={cls.items}>
				<AppLink
					to={RoutePath.main}
					className={cls.item}
					theme={AppLinkTheme.INVERTED}
				>
					<MainPageIcon className={cls.icon} />
					<span className={cls.link}>{t("Главная")}</span>
				</AppLink>

				<AppLink
					to={RoutePath.about}
					theme={AppLinkTheme.INVERTED}
					className={cls.item}
				>
					<AboutPageIcon className={cls.icon} />
					<span className={cls.link}>{t("О сайте")}</span>
				</AppLink>
			</div>

			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? ">" : "<"}
			</Button>
			<div className={cls.switchers}>
				<LangSwitcher short={collapsed} />
				<ThemeSwitcher />
			</div>
		</div>
	)
}
