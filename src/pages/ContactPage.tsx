import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { business } from "@/content/business";
import { getMapsUrl } from "@/lib/maps";
import { usePageMeta } from "@/lib/usePageMeta";

export default function ContactPage() {
  usePageMeta("/contact", "Visit Us");
  const mapsUrl = getMapsUrl(business.address);
  const formattedAddress = business.address.replace(", New Hope", ",\nNew Hope");
  return <>
    <section className="page-hero pickle-page-hero"><div className="site-container"><p className="eyebrow">Come say hello</p><h1>New spot<br />Same pickle energy</h1><p>Find us on South Main Street in New Hope for jars, sandwiches, and pickles galore</p></div></section>
    <section className="section"><div className="site-container visit-grid"><div className="visit-card"><MapPin /><h2>Visit Gio's</h2><a className="map-trigger" href={mapsUrl} target="_blank" rel="noreferrer"><span className="link-label address-label">{formattedAddress}</span></a><p className="menu-note">A map embed can go here when we move from demo to live</p></div><div className="visit-card"><Clock3 /><h2>Hours</h2>{business.hours.map(([day, hours]) => <div className="hours-row" key={day}><span>{day}</span><strong>{hours}</strong></div>)}</div><div className="visit-card contact-card"><MessageCircle /><h2>Let's chat</h2><a href={`tel:${business.phone.replace(/\D/g, "")}`}><Phone /> <span className="link-label">{business.phone}</span></a><a href={`mailto:${business.email}`}><Mail /> <span className="link-label">{business.email}</span></a><p>Questions about catering, wholesale, or your next event? Reach out!</p></div></div></section>
  </>;
}
