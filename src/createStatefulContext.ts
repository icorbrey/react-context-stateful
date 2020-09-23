import React from 'react'

type ContextProviderProps = {
	children?: React.ReactNode
}

type ContextPair<T> = [
	() => T,
	({ children }: ContextProviderProps) => React.ReactElement
]

type ContextProviderCreator<T> = (Provider: React.Provider<T>) =>
	({ children }: ContextProviderProps) =>
		React.ReactElement

export default <T>(creator: ContextProviderCreator<T>): ContextPair<T> =>
{
	const context = React.createContext<T>({} as T)
	const provider = creator(context.Provider)

	const useContext = () => React.useContext(context)
	return [useContext, provider]
}
