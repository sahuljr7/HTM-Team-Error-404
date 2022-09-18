import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => (
  <Layout>
    <Container>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Web 3.0
        </Heading>
        <Paragraph>
        Project Metaverse:  A realtime chat Dapp(decentralized application) based on Web3.0 and Blockchain.
        </Paragraph>
        <br/>
        <Heading as="h3" variant="section-title">
        Problem Statement
        </Heading>
        <Paragraph>
        The privacy issues in a time where digital life is almost consuming us is a grave threat.
        <br/>
        <br/>
        ➡Users have to submit sensitive data, like name, date of birth, and phone number.
        <br/>
        <br/>
        ➡Apps are often misused to spread fake news and misinformation.
        <br/>
        <br/>
        ➡Many messaging applications store the data on the cloud, which is not encrypted, exposing it to vulnerabilities.
        <br/>
        <br/>
        ➡Several apps use personal information for unethical purposes. They allegedly shared the data acquired with advertisers. To this date, cases of such privacy and data leaks have already happened.
        </Paragraph>
        <Heading as="h3" variant="section-title">
        We got a Solution!!!
        </Heading>
        <Paragraph>
        The demand for private instant communication fueled the rise of encrypted messaging apps. So, in this project we are building a realtime chat Dapp(decentralized application) based on Web3.0 and Blockchain.
        </Paragraph>
        <Heading as="h3" variant="section-title">
        What problem does our web   application solve?
        </Heading>
        <Paragraph>
        ➡ A completely secure and anonymous sign-up, only needing a crypto wallet address. No need for names, IDs, or phone numbers (like Telegram). Total user privacy, without compromise.
        <br/>
        <br/>
        ➡ No cloud storage, no user moderation, and complete end-to-end encryption for all messages between users – completely eliminating the risk of hacks or data leaks.
        <br/>
        <br/>
        ➡ All messaging history and files are on anonymous, independent, and non-connected nodes, on the Blockchain network. This eliminates all points of failure and, as it grows and expands its nodes, becomes increasingly secure.
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/chats" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Let's Chat
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
