/// <reference types="vite/client" />

declare module 'typewriter-effect' {
  import { Component } from 'react'

  interface TypewriterOptions {
    strings?: string[]
    autoStart?: boolean
    loop?: boolean
    deleteSpeed?: number
    delay?: number
    cursor?: string
    skipAddStyles?: boolean
    wrapperClassName?: string
    cursorClassName?: string
  }

  interface TypewriterProps {
    options?: TypewriterOptions
    onInit?: (typewriter: unknown) => unknown
    component?: string | React.ComponentType
  }

  export default class Typewriter extends Component<TypewriterProps> {}
}
