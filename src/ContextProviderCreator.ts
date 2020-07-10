import ContextProviderProps from 'ContextProviderProps'
import { ReactElement, Context as ReactContext } from 'react'

type ContextProviderCreator<T> = (Context: ReactContext<T>) =>
	({ children }: ContextProviderProps) =>
		ReactElement

export default ContextProviderCreator
