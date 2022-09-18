import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDiscord from '../public/images/works/discord.png'
import thumbMetaverse from '../public/images/works/metaverse.png'

const Works = () => (
  <Layout title="Web 3.0">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web 3.0
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="discord" title="Discord-Lite" thumbnail={thumbDiscord}>
            A realtime chat web application or workspace based on Web 2.0 to share resources.
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem id="metaverse" thumbnail={thumbMetaverse} title="Metaverse">
          A realtime chat Dapp(decentralized application) based on Web3.0 and Blockchain.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
