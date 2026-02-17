import { render, screen } from "@testing-library/react"
import {describe, expect, test} from '@jest/globals';
import { Button } from "./index"

describe("Button component", () => {
  test("render button with title", () => {
    render(<Button title="test" />)
    expect(screen.getByText("test")).toBeInTheDocument()
  })
})
