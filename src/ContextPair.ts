import { Context as ReactContext, ReactElement } from 'react'
import ContextProviderProps from 'ContextProviderProps'

type ContextPair<T> = [
	ReactContext<T>,
	({ children }: ContextProviderProps) => ReactElement
]

export default ContextPair
