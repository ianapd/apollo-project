import { Box, Text, Container, Heading } from '@chakra-ui/react'
import { gql } from "@apollo/client"
import client from "../apollo-client"
import { useEffect } from 'react'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 5)
    }
  }
}

export default function ServerSide({ countries }) {
  useEffect(() => {
    console.log(countries)
  }, [])
  return (
    <Box mt={16}>
      <Container maxW="container.lg">
        <Heading mb={4}>Apollo Graph QL</Heading>
        <Heading size="lg" mb={2}>SELECT Countries</Heading>
        {
          countries.map((i, iKey) => (
            <Text key={iKey}>{i.emoji} - {i.code}, {i.name}</Text>
          ))
        }
      </Container>
    </Box>
  )
}