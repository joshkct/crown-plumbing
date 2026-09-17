import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

type ContactActionsProps = {
  compact?: boolean;
  email?: boolean;
};

export function ContactActions({ compact = false, email = false }: ContactActionsProps) {
  return (
    <div className={`contact-actions${compact ? " contact-actions--compact" : ""}`}>
      <a className="button button--primary" href={contact.phoneHref}>
        <Phone aria-hidden="true" />
        <span>{compact ? "Call" : "Call now"}</span>
      </a>
      <a
        className="button button--outline"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle aria-hidden="true" />
        <span>{compact ? "WhatsApp" : "WhatsApp us"}</span>
      </a>
      {email ? (
        <a className="button button--text" href={contact.emailHref}>
          <Mail aria-hidden="true" />
          <span>Email us</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}
