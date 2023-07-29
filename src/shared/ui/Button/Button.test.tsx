import { Button, ButtonTheme } from "./Button"
import { render, screen } from "@testing-library/react"

describe("Button", () => {
	test("test render", () => {
		render(<Button>Test</Button>)
		expect(screen.getByText("Test")).toBeInTheDocument()
	})

	test("test clear theme", () => {
		render(<Button theme={ButtonTheme.CLEAR}>Test</Button>)
		expect(screen.getByText("Test")).toHaveClass("clear")
	})
})
