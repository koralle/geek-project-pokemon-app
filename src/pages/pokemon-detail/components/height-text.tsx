import { Text } from '@yamada-ui/react'

interface HeightTextProps {
  height: number
}

const HeightText = ({ height }: HeightTextProps) => {
  const heightText = (height / 10) % 1 === 0 ? `${height / 10}.0` : `${height / 10}`
  return <Text fontSize={{ base: 'lg', sm: 'md' }}>{heightText} m</Text>
}

export { HeightText }
