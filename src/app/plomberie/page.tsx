import { permanentRedirect, RedirectType } from "next/navigation";

export default function PlomberiePage() {
  permanentRedirect("/plomberie/montpellier", RedirectType.replace);
}
