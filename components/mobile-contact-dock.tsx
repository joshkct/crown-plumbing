import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

export function MobileContactDock() {
  return (
    <div className="mobile-contact-dock" aria-label="Quick contact actions">
      <a href={contact.phoneHref}><Phone aria-hidden="true" />Call now</a>
      <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
        <MessageCircle aria-hidden="true" />WhatsApp
      </a>
    </div>
  );
}
