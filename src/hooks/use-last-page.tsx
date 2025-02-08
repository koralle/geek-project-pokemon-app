import { DEFAULT_LIMIT } from '../lib/constants'
import { usePageContext } from '../lib/contexts/page-context'
import { useTotalContext } from '../lib/contexts/total-context'

export const useLastPage = () => {
  const { total } = useTotalContext()
  const { page } = usePageContext()

  const isLastPage = Math.ceil(total / DEFAULT_LIMIT) === page

  return {
    isLastPage,
  }
}
