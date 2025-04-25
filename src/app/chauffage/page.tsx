import { permanentRedirect, RedirectType } from "next/navigation";

export default function ChauffagePage() {
  permanentRedirect("/chauffage/montpellier", RedirectType.replace);
}
