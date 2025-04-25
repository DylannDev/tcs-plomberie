import { permanentRedirect, RedirectType } from "next/navigation";

export default function ClimatisationPage() {
  permanentRedirect("/climatisation/montpellier", RedirectType.replace);
}
