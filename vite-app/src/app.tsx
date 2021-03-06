import { Logo } from './logo'
import { TestComponent } from 'vite-lib'

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>

      </p>
      <TestComponent/>
    </>
  )
}
