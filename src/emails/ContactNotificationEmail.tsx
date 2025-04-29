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

interface ContactNotificationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactNotificationEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
}: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact</Preview>
      <Tailwind>
        <Body className="mx-auto font-sans">
          <Container className="p-[20px] max-w-[500px] w-full">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[20px] mx-0">
              Nouveau message de contact
            </Heading>
            <Section className="mt-[32px]">
              <Text className="text-black text-[16px] leading-[24px]">
                <span className="font-bold">Nom complet :</span> {firstName}{" "}
                {lastName}
              </Text>
              <Text className="text-black text-[16px] leading-[24px]">
                <span className="font-bold">Email :</span> {email}
              </Text>
              <Text className="text-black text-[16px] leading-[24px]">
                <span className="font-bold">Téléphone :</span>{" "}
                {phone || "Non renseigné"}
              </Text>
              <Text className="text-black text-[16px] leading-[24px] mt-[16px]">
                <span className="font-bold">Message :</span>
              </Text>
              <Text className="text-black text-[16px] leading-[24px] whitespace-pre-wrap">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
