import ContextPair from 'ContextPair'
import ContextProviderCreator from 'ContextProviderCreator'
import { createContext as createReactContext } from 'react'

export default <T>(creator: ContextProviderCreator<T>): ContextPair<T> =>
{
	const context = createReactContext<T>({} as T)
	const provider = creator(context)
	return [context, provider]
}
