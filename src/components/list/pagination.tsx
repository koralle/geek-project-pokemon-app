import { Pagination, useBreakpoint } from '@yamada-ui/react'
import { startTransition } from 'react'
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../../lib/constants'
import { usePageContext, useSetPageContext } from '../../lib/contexts/page-context'
import { useTotalContext } from '../../lib/contexts/total-context'

const useIsMobile = () => {
  const breakpoint = useBreakpoint()
  return breakpoint === 'base' || ['xs', 'sm'].includes(breakpoint)
}

export const PokemonCollectionPagination = () => {
  const { page } = usePageContext()
  const { setPage } = useSetPageContext()
  const { total } = useTotalContext()
  const isMobile = useIsMobile()

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      setPage(() => newPage)
    })
  }

  return (
    <Pagination
      variant="solid"
      page={page ?? DEFAULT_PAGE}
      total={Math.ceil(total / DEFAULT_LIMIT)}
      onChange={handlePageChange}
      size={{ base: 'md', md: 'lg' }}
      siblings={isMobile ? 0 : 1}
      withEdges={!isMobile}
    />
  )
}
