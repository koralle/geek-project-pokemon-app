import { Box, Center, Grid, HStack, Image, Spacer, Text } from '@yamada-ui/react'
import { memo } from 'react'
import type { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => (
  <Box
    maxW={960}
    minW={320}
    w="100%"
    px={{ base: 4, md: 8 }}
    py={6}
    h="100%"
  >
    {children}
  </Box>
)

const Header = () => {
  return (
    <Center
      as="header"
      backdropBlur="0.5rem"
      backdropFilter="auto"
      backdropSaturate="180%"
      position="sticky"
      top={0}
      left={0}
      right={0}
      zIndex={1}
    >
      <Wrapper>
        <HStack>
          <Image
            src="title.png"
            alt="ポケモンずかん"
            decoding="auto"
            fetchPriority="high"
          />
          <Spacer />
        </HStack>
      </Wrapper>
    </Center>
  )
}

const Main = ({ children }: { children: ReactNode }) => (
  <Center
    as="main"
    id="main"
    minH="100%"
  >
    <Wrapper>{children}</Wrapper>
  </Center>
)

const Footer = memo(() => (
  <Center as="footer">
    <Wrapper>
      <Center>
        <Text>&copy; 2025 koralle</Text>
      </Center>
    </Wrapper>
  </Center>
))

export const Layout = ({ children }: { children: ReactNode }) => (
  <Grid
    minW="100svi"
    minH="100svb"
    templateRows="max-content 1fr max-content"
    gap={0}
  >
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Grid>
)
