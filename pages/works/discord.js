import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Discord-Lite">
    <Container>
      <Title>
        Discord Lite <Badge>2022</Badge>
      </Title>
      <P>
        A personal chat room or workspace based on Web 2.0 to share resources and hangout with friends build with React.js, Material-UI, and Firebase.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://hackathon-htm.web.app/">
          https://hackathon-htm.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, Material-UI, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="https://user-images.githubusercontent.com/71061738/177621100-785ba64a-c744-4489-b926-1c3246e75f01.png" alt="Discord-Lite" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
