import { Text } from '@yamada-ui/react'

interface WeightTextProps {
  weight: number
}

const WeightText = ({ weight }: WeightTextProps) => {
  const weightText = (weight / 10) % 1 === 0 ? `${weight / 10}.0` : `${weight / 10}`
  return <Text fontSize={{ base: 'lg', sm: 'md' }}>{weightText} kg</Text>
}

export { WeightText }
