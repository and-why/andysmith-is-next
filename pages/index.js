import Layout from '../components/layout';
import AboutMe from '../components/AboutMe';
import ProjectList from '../components/ProjectList';
import { H2, H3 } from '../components/styled-components/Headings';
import { Flex } from '../components/styled-components/Flex';
import Link from 'next/link';
import { externalTag } from '../lib/icons';
import { Text } from '../components/styled-components/Text';

export default function Home() {
  const clients = [
    {
      name: 'Club Connect',
      website: 'https://clubconnect.net.au/welcome',
      work: 'Project Managment, React UI updates',
    },
    {
      name: 'MQG',
      website: 'https://mqg.com.au',
      work: 'WordPress Web Development',
    },
    {
      name: 'iSelect',
      website: 'https://iselect.com.au',
      work: 'WordPress Web Development',
    },
    {
      name: 'PCYC',
      website: 'https://pcyc.com.au',
      work: 'React Development',
    },
    {
      name: 'Cellnet - Webcell',
      website: 'https://www.cellnet.com.au/webcell/',
      work: 'React Development',
    },
    {
      name: 'StudioMoso',
      website: 'https://www.StudioMoso.com.au/',
      work: 'Freelance React Development',
    },
  ];
  return (
    <Layout page='home' pageTitle='Freelance Web Engineer'>
      <AboutMe />
      <H2 marginBottom='0.5em'>Side Projects</H2>
      <ProjectList />
      {/* <H2 marginBottom='0.5em' marginTop='1em'>
        Featured Clients
      </H2>
      <Flex justify='flex-start' gap='25px' my='1em' wrap='wrap'>
        {clients.map((client) => {
          return (
            <Link href={client.website} referrerpolicy='origin' rel='external' passHref>
              <a>
                <Text fontSize='16px' fontWeight='700'>
                  {client.name} {externalTag}
                </Text>
              </a>
            </Link>
          );
        })}
      </Flex> */}
    </Layout>
  );
}
