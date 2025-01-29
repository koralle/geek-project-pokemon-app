import { useNavigate, useSearch } from '@tanstack/react-router'
import { Box, Center, Pagination, useBreakpoint } from '@yamada-ui/react'
import { useTotalContext } from '../lib'
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../lib'

const PokemonCollectionPagination = () => {
  const { page } = useSearch({ strict: false })
  const { total } = useTotalContext()
  const isMobile = ['xs', 'sm'].includes(useBreakpoint())

  const navigate = useNavigate({ from: '/' })

  const handlePageChange = (newPage: number) => {
    navigate({ search: () => ({ page: newPage }) })
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <Box>
        <Center>
          <Pagination
            variant="solid"
            page={page ?? DEFAULT_PAGE}
            onChange={handlePageChange}
            total={Math.ceil(total / DEFAULT_LIMIT)}
            size={{ base: 'lg', md: 'lg', sm: 'md' }}
            siblings={isMobile ? 0 : 1}
            withEdges={!isMobile}
          />
        </Center>
      </Box>
    </>
  )
}
export { PokemonCollectionPagination }
