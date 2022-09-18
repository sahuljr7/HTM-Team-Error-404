import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Metaverse">
    <Container>
      <Title>
        Metaverse <Badge>2022</Badge>
      </Title>
      <P>
      A realtime chat Dapp(decentralized application) based on Web3.0 and Blockchain.
      </P>
  <br/>
      <P>
        For this build we use Moralis which is a multi-chain, serverless development platform, that provides “ready to use” tooling for building dApps including authentication with a web3 wallet, getting instant access to all the on-chain transactions, tokens, and NFT balances simply through the Moralis database.
        <br/>
      <Link href="https://moralis.io/" target="_blank">
      Moralis.io <ExternalLinkIcon mx="2px" />
        </Link>
      </P>
      <br/>
      <P>
        We also use MetaMask which is a cryptocurrency wallet that enables users to access the Web 3 ecosystem of decentralized applications (dapps). The wallet can also be used to interact with decentralized applications, or dapps.
        <br/>
      <Link href="https://metamask.io/" target="_blank">
      MetaMask.io <ExternalLinkIcon mx="2px" />
        </Link>
      </P>
      <br/>
      <P>
        For this project, I have done the following:
        <br/>
        <br/>
        ⭐ Setting up MetaMask Wallet
        <br/>
        ⭐ Setting up Moralis
        <br/>
        ⭐ Setting up Next.js & Tailwind CSS
        <br/>
        ⭐ Building the Login Component
        <br/>
        ⭐ Building the Login Functionality
        <br/>
        ⭐ Building the Logout Functionality
        <br/>
        ⭐ Building the Header Component
        <br/>
        ⭐ Building the Avatar Component
        <br/>
        ⭐ Building the ChangeUsername Component
        <br/>
        ⭐ Building the Messages Component
        <br/>
        ⭐ Building the SendMessage Component
        <br/>
        ⭐ Building Autoscroll Functionality
        <br/>
        ⭐ Building the Timestamp Functionality
      </P>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <br/>
          <Link href="https://htm-hackathon-metaverse-sahul.vercel.app/">
          https://htm-hackathon-metaverse-sahul.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://htm-hackathon-metaverse-ashwani.vercel.app/">
          https://htm-hackathon-metaverse-ashwani.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
          <Link href="https://htm-hackathon-metaverse-kripa.vercel.app/">
          https://htm-hackathon-metaverse-kripa.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
          <br/>
          <Link href="https://htm-hackathon-metaverse-deepak.vercel.app/">
          https://htm-hackathon-metaverse-deepak.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Moralis.io, Tailwind and Metamask</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/metaverse.png" alt="metaverse" />
      <WorkImage src="/images/works/metaverse1.png" alt="metaverse" />
      <WorkImage src="/images/works/metaverse2.png" alt="metaverse" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
