import { fireEvent, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"
import { 
	componentRender 
} from "shared/config/tests/componentRender/componentRender"

describe("SideBar", () => {
	test("test render", () => {
		componentRender(<SideBar />)
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
	})

	test("test toggle", () => {
		componentRender(<SideBar />)
		const toggleBtn = screen.getByTestId("sidebar-toggle")
		expect(screen.getByTestId("sidebar")).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
	})
})
