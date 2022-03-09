import { useQuery } from '@apollo/client'
import { Box, Text, Container, Heading } from '@chakra-ui/react'
import { GET_COUNTRIES } from '../queries/schema'

export default function Home() {
  const { loading, data, error } = useQuery(GET_COUNTRIES, {
    pollInterval: 500
  })

  if (loading) {
    return (
      <Text>Loading....</Text>
    )
  }

  if (error) {
    return (
      <Text>Error: {error}</Text>
    )
  }

  return (
    <Box mt={16}>
      <Container maxW="container.lg">
        <Heading mb={4}>Apollo Graph QL</Heading>
        <Heading size="lg" mb={2}>SELECT Countries</Heading>
        {
          data.countries.map((i, iKey) => (
            <Text key={iKey}>{i.emoji} - {i.code}, {i.name}</Text>
          ))
        }
      </Container>
    </Box>
  )
}
