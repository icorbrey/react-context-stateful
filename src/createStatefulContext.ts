import
{
	ReactNode,
	ReactElement,
	Context as ReactContext,
	createContext as createReactContext
} from 'react'

type ContextProviderProps = {
	children?: ReactNode
}

type ContextPair<T> = [
	ReactContext<T>,
	({ children }: ContextProviderProps) => ReactElement
]

type ContextProviderCreator<T> = (Context: ReactContext<T>) =>
	({ children }: ContextProviderProps) =>
		ReactElement

export default <T>(creator: ContextProviderCreator<T>): ContextPair<T> =>
{
	const context = createReactContext<T>({} as T)
	const provider = creator(context)
	return [context, provider]
}
