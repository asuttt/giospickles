import { CalendarDays, MapPin, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import storefrontImage from "@/assets/demo/storefront.jpg";
import { usePageMeta } from "@/lib/usePageMeta";

export default function AboutPage() {
  usePageMeta("/about", "Our Story");

  return <>
    <section className="story-feature">
      <div className="story-feature-photo"><img src={storefrontImage} alt="Giovanni's Dillicious Pickles storefront in New Hope" /></div>
      <div className="story-feature-content">
        <p className="eyebrow">Our story</p>
        <h1>A new chapter<br />is taking shape</h1>
        <p>Giovanni's Dillicious Pickles is finding its new home in New Hope — a neighborhood pickle shop built around big flavors, candid small-business spirit, and plenty of crunch</p>
        <div className="story-fact-cards">
          <article><MapPin /><h2>New Hope, PA</h2><p>Our new home on South Main Street</p></article>
          <article><Sprout /><h2>Small business<br />Big crunch</h2><p>Loud flavors and local ingredients</p></article>
          <article><CalendarDays /><h2>Grand opening</h2><p>Come celebrate with us July 18</p></article>
        </div>
      </div>
    </section>
    <section className="section"><div className="site-container story-grid"><div className="story-paper"><p>“There is no such thing as too many pickles”</p><span>— Probably Gio</span></div><div><p className="eyebrow">Our corner of New Hope</p><h2 className="display-heading">We like things a little quirky</h2><p className="large-copy">Gio's is the kind of local place where the stories are real, the wins are celebrated, and the hard days are all part of making something good</p><p className="large-copy">It's a place for a perfect jar, a hearty sandwich, a good laugh, and a little neighborly love</p><Link className="button button-primary" to="/contact">Visit Our New Location</Link></div></div></section>
  </>;
}
