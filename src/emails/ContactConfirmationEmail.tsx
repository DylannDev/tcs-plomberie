import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactConfirmationEmailProps {
  firstName: string;
  message: string;
}

export function ContactConfirmationEmail({
  firstName,
  message,
}: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Merci pour votre message !</Preview>
      <Tailwind>
        <Body className="mx-auto font-sans">
          <Container className="p-[20px] max-w-[500px] w-full">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[20px] mx-0">
              Merci pour votre message !
            </Heading>
            <Section className="mt-[32px]">
              <Text className="text-black text-[16px] leading-[24px]">
                Bonjour {firstName},
              </Text>
              <Text className="text-black text-[16px] leading-[24px] mt-[16px]">
                Nous avons bien reçu votre demande et reviendrons vers vous très
                rapidement.
              </Text>
              <Text className="text-black text-[16px] leading-[24px] mt-[16px]">
                <span className="font-bold">
                  Voici un rappel de votre message :
                </span>
              </Text>
              <Text className="text-black text-[16px] leading-[24px] whitespace-pre-wrap mt-[8px]">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
