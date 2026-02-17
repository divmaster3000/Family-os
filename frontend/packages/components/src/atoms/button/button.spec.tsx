import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index'

describe('Button component', () => {
  test('render button with title', () => {
    render(<Button title="test" variant="filled" palette="primary" onClick={() => {}} />)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('render disabled button', () => {
    render(
      <Button
        title="test"
        variant="filled"
        palette="primary"
        onClick={() => {}}
        isDisabled={true}
      />,
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  test('click on button', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button title="test" variant="filled" palette="primary" onClick={handleClick} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
