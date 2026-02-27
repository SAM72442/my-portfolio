import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}` // vercel
  : "http://localhost:3000"; // local

export const Email = ({ firstName, lastName, contact, email, message }) => (
  <Html>
    <Tailwind>
      <Head />
      <Body className="bg-white font-nike">
        <Preview>Copy of Your Resonse</Preview>
        <Container className="my-2.5 mx-auto max-w-150 border border-[#E5E5E5]">
          <Section className="py-2 sm:py-4 px-5 sm:px-10 bg-[#F7F7F7]">
            <Row>
              <Column className="block sm:table-cell">
                <Img
                  src={`${baseUrl}/me-half-bg-removed.png`}
                  alt="Profile Picture"
                  className="w-25 sm:w-30 rounded-full pb-2"
                />
              </Column>
              <Column className="block sm:table-cell sm:text-right">
                <Text className="m-0 text-[25px] font-bold">Sayan Das</Text>
                <Text className="mt-3 mb-0 text-[18px] font-semibold text-[#9c9c9c] font-sans">
                  Software Engineer | Web Developer
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr className="border-[#e5e5e5] m-0" />
          <Section className="pt-5 pb-8 px-18.5 text-center">
            <Heading className="text-[32px] font-bold text-center -tracking-[1px]">
              Thanks for Reaching Out!
            </Heading>
            <Text className="m-0 text-[14px] leading-4 text-[#747474] font-sans">
              I've received your message and will get back to you. Here is a
              copy of what you sent:
            </Text>
          </Section>
          <Hr className="border-[#e5e5e5] m-0" />
          <Section className="p-5 bg-[#f7f7f7] text-sm sm:text-base font-semibold font-sans">
            <Row className="rounded-xl p-4 sm:p-6 border shadow-lg bg-white border-[#e5e5e5]">
              <Column>
                <Row className="mb-4">
                  <Column className="sm:w-12/25 bg-[#faede3] border-[#e5e5e5] text-[#5d5d5d] px-3 sm:px-4 py-2 sm:py-3 rounded-lg block sm:table-cell m-0 mb-4">
                    {firstName}
                  </Column>
                  <Column className="w-1/25 hidden sm:table-cell"></Column>
                  <Column className="sm:w-12/25 bg-[#faede3] border-[#e5e5e5] text-[#5d5d5d] px-3 sm:px-4 py-2 sm:py-3 rounded-lg block sm:table-cell">
                    {lastName}
                  </Column>
                </Row>
                <Row>
                  <Text className="bg-[#faede3] border-[#e5e5e5] text-[#5d5d5d] px-3 sm:px-4 py-2 sm:py-3 rounded-lg m-0 mb-4">
                    {email}
                  </Text>
                </Row>
                <Row>
                  <Text className="bg-[#faede3] border-[#e5e5e5] text-[#5d5d5d] px-3 sm:px-4 py-2 sm:py-3 rounded-lg m-0 mb-4">
                    {contact}
                  </Text>
                </Row>
                <Row>
                  <Text className="bg-[#faede3] border-[#e5e5e5] text-[#5d5d5d] px-3 sm:px-4 py-2 sm:py-3 rounded-lg m-0 mb-4">
                    {message}
                  </Text>
                </Row>
              </Column>
            </Row>
          </Section>
          <Hr className="border-[#e5e5e5] m-0" />
          <Section className="py-10 text-[#afafaf]">
            <Row className="max-w-60 mx-auto mb-4">
              <Column align="center">
                <Link
                  href="https://yourportfolio.com"
                  className="text-[#999999] text-[12px] underline mx-2"
                >
                  Portfolio
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="https://github.com/SAM72442"
                  className="text-[#999999] text-[12px] underline mx-2"
                >
                  GitHub
                </Link>
              </Column>
              <Column align="center">
                <Link
                  href="https://www.linkedin.com/in/sayan-das-461583242/"
                  className="text-[#999999] text-[12px] underline mx-2"
                >
                  LinkedIn
                </Link>
              </Column>
            </Row>
            <Row>
              <Text className="m-0 text-[11px] text-center mt-6">
                Sent from **Sayan Das** — Software Engineer Portfolio
              </Text>
              <Text className="m-0 text-[11px] text-center mt-6">
                © 2022 - {new Date().getFullYear()} Sayan Das.
                <br />
                All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Email;
