import { MoonIcon, SunIcon } from '@yamada-ui/lucide'
import { Box, Center, Grid, HStack, IconButton, Image, Spacer, Text, useColorMode } from '@yamada-ui/react'
import type { ReactNode } from 'react'

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box maxW={960} minW={320} w="100%" px={{ base: 4, md: 8 }} py={6} h="100%">
      {children}
    </Box>
  )
}

const ToggleColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      icon={colorMode === 'dark' ? <SunIcon fontSize={6} /> : <MoonIcon fontSize={6} />}
      variant="primary"
      fullRounded
      onClick={toggleColorMode}
    />
  )
}

const Header = () => {
  const { colorMode } = useColorMode()

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
          {colorMode === 'light' ? (
            <Image src="title.png" alt="ポケモンずかん" decoding="auto" />
          ) : (
            <Image src="title-dark.png" alt="ポケモンずかん" decoding="auto" />
          )}
          <Spacer />
          <ToggleColorModeButton />
        </HStack>
      </Wrapper>
    </Center>
  )
}

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Center as="main" id="main" minH="100%">
      <Wrapper>{children}</Wrapper>
    </Center>
  )
}

const Footer = () => {
  return (
    <Center as="footer">
      <Wrapper>
        <Center>
          <Text>&copy; 2025 koralle</Text>
        </Center>
      </Wrapper>
    </Center>
  )
}

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid minW="100svi" minH="100svb" templateRows="max-content 1fr max-content" gap={0}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  )
}
