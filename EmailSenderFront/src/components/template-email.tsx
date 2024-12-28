import {
  Body,
  Button,
  Container,
  Heading,
  Html,
  Section,
  Text,
  Link,
  Head,
  Preview,
} from '@react-email/components';

const TemplateEmail = () => {
  //Esta es una Plantilla de Ejemplo
  return (
    <Html>
      <Head />
      <Preview>#CodePenChallenge: Cubes</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            <strong>This week:</strong> #CodePenChallenge:{' '}
            <Text style={cubeText}>Cubes</Text>
          </Heading>

          <Section style={section}>
            <Text style={text}>The Shape challenge continues!</Text>

            <Text style={text}>
              Last week, we kicked things off with round shapes. We "rounded" up
              the Pens from week one in our{' '}
              <Link style={blueLink}>#CodePenChallenge: Round</Link> collection.
            </Text>

            <Text style={text}>This week, we move on to cubes 🧊</Text>

            <Text style={text}>
              Creating cubes in the browser is all about mastery of illusion.
              Take control of perspective and shadows and you can make the magic
              of 3D on a flat screen 🧙
            </Text>

            <Text style={text}>
              This week is a fun chance to work on your CSS shape-building
              skills, or dig into a 3D JavaScript library like Three.js.
            </Text>

            <Text style={text}>
              This week's starter template features an ice cube emoji to help
              inspire a "cool" idea for your Pen. As always, the template is
              just as jumping off point. Feel free to incorporate the 🧊 in your
              creation, add more elements, or freeze it out completely and start
              over from scratch!
            </Text>

            <Text style={yourChallenge}>
              💪 <strong>Your Challenge:</strong>{' '}
              <Link style={blueLink}>
                create a Pen that includes cube shapes.
              </Link>
            </Text>

            <Section style={sectionPro}>
              <Text>
                CodePen PRO combines a bunch of features that can help any
                front-end designer or developer at any experience level.
              </Text>

              <Button style={button}>
                <strong>Learn More</strong>
              </Button>
            </Section>
          </Section>

          <Text style={yellowSection}>
            <strong>To participate:</strong>{' '}
            <Link style={blueLink}>Create a Pen →</Link> and tag it{' '}
            <Link style={blueLink}>
              <strong>codepenchallenge</strong>
            </Link>{' '}
            and
            <Link style={blueLink}>
              {' '}
              <strong>cpc-cubes</strong>
            </Link>
            . We'll be watching and gathering the Pens into a Collection, and
            sharing on <Link style={blueLink}>Twitter</Link> and{' '}
            <Link style={blueLink}>Instagram</Link> (Use the #CodePenChallenge
            tag on Twitter and Instagram as well).
          </Text>
          <Section style={footer}>
            <Text style={footerText}>
              You can adjust your{' '}
              <Link style={footerLink}>email preferences</Link> any time, or{' '}
              <Link style={footerLink}>instantly opt out</Link> of emails of
              this kind. Need help with anything? Hit up{' '}
              <Link style={footerLink}>support</Link>.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default TemplateEmail;

const main = {
  fontFamily: '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
  backgroundColor: '#505050',
  margin: '0',
};

const container = {
  margin: '0 auto',
  width: '648px',
  maxWidth: '100%',
  position: 'relative' as const,
};

const blueLink = {
  color: '#15c',
  cursor: 'pointer',
};

const heading = {
  background: '#f0d361',
  padding: '30px',
  color: '#191919',
  fontWeight: '400',
  marginBottom: '0',
};

const section = {
  margin: '0',
  background: '#fff',
  padding: '0 24px',
};

const yellowSection = {
  background: '#f5d247',
  padding: '30px',
  fontSize: '18px',
  lineHeight: '1.5',
};

const text = {
  fontSize: '16px',
  color: '#000000',
};

const cubeText = { fontSize: '32px', margin: '4px 0 0 0' };

const yourChallenge = {
  fontSize: '16px',
  border: '6px solid #ebd473',
  padding: '20px',
  margin: '0 0 40px 0',
  color: '#000000'
};

const sectionPro = {
  marginTop: '40px',
  marginBottom: '24px',
  textAlign: 'center' as const,
  background: '#0b112a',
  color: '#fff',
  padding: '35px 20px 30px 20px',
  border: '6px solid #2138c6',
};

const button = {
  background: '#2138c6',
  color: '#fff',
  border: '0',
  fontSize: '15px',
  lineHeight: '18px',
  cursor: 'pointer',
  borderRadius: '4px',
  padding: '12px',
};

const footer = {
  background: '#fff',
  color: '#505050',
  padding: '0 24px',
  marginBottom: '48px',
};

const footerText = {
  fontSize: '13px',
};

const footerLink = {
  textDecoration: 'underline',
  color: '#505050',
  cursor: 'pointer',
};
