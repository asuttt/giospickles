import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/demo/pickle-sandwich-cutout.png";
import fanImageOne from "@/assets/demo/fan1.jpg";
import fanImageTwo from "@/assets/demo/fan2.jpg";
import fanImageThree from "@/assets/demo/fan3.jpg";
import homeplateImage from "@/assets/demo/homeplate.jpg";
import { business } from "@/content/business";
import { getMapsUrl } from "@/lib/maps";
import { usePageMeta } from "@/lib/usePageMeta";

export default function HomePage() {
  usePageMeta("/", "Home");
  const mapsUrl = getMapsUrl(business.address);
  const menuPreviewItems = [
    ["Pickle Sandwiches", "Giovanni Italian Pickle Hoagie", "Italian meats, cheese, and the house pickle crunch"],
    ["Pickle Boats", "BLT Pickle Boat", "Bacon, lettuce, and tomato on a pickle base"],
    ["Small Bites", "Pickle Spears", "Cold, crisp spears with big briny energy"],
  ];

  return (
    <>
      <section className="pickle-hero light-hero">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">New Hope's crunchiest little obsession</p>
            <h1>Big flavor,<br /><i>Zero</i> bread</h1>
            <p>Pickle sandwiches, 50+ flavors, and the kind of variety that keeps life delicious</p>
            <div className="hero-actions"><Link className="button button-primary" to="/menu">Our Menu</Link><Link className="text-link hero-text-link" to="/contact"><span className="text-trigger-label">Ask About Catering</span> <ArrowRight aria-hidden="true" /></Link></div>
          </div>
          <div className="hero-product"><span>Turkey & Cheese Pickle Hoagie</span><img src={heroImage} alt="Turkey and cheese pickle sandwich" /></div>
        </div>
      </section>
      <section className="intro-strip"><p>Not your average pickle jar</p><strong>50+ flavors · Sandwiches & pizza · Locally sourced</strong></section>
      <section className="section"><div className="site-container"><p className="eyebrow">The main event</p><h2 className="display-heading">Pickles doing<br />the absolute most</h2><div className="sandwich-grid">{menuPreviewItems.map(([category, name, description], index) => <article className={`sandwich-card card-${index + 1}`} key={name}><span>{category}</span><h3>{name}</h3><p>{description}</p></article>)}</div><Link className="text-link" to="/menu"><span className="text-trigger-label">Explore All Flavors & Bites</span> <ArrowRight /></Link></div></section>
      <section className="section community-section"><div className="site-container"><div className="community-grid"><div><p className="eyebrow">Made for New Hope</p><h2 className="display-heading">A little bit deli, a little<br />bit unhinged</h2><p className="large-copy">We make the good kind of mess: jars at the counter, opinions on every flavor, and a place to stop in, say hi, and leave with something crunchy</p><Link className="button button-primary" to="/about">Meet Gio's</Link></div><figure className="polaroid-placeholder"><img src={homeplateImage} alt="Giovanni's Pickles in New Hope" /></figure></div><div className="visit-band"><a className="visit-trigger map-trigger" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin /><span className="text-trigger-label">{business.address}</span></a><Link className="visit-trigger" to="/contact"><span className="text-trigger-label">Hours & Directions</span> <ArrowRight /></Link><a className="visit-trigger" id="order" href="mailto:giospickles@gmail.com"><ShoppingBag /> <span className="text-trigger-label">Online Orders (Coming Soon)</span></a></div></div></section>
      <section className="section home-photo-wall"><div className="site-container"><p className="eyebrow">The photo wall</p><h2 className="display-heading">This bit is for the regulars</h2><div className="photo-wall"><figure><img src={fanImageOne} alt="Giovanni's Pickles community moment" /></figure><figure><img src={fanImageTwo} alt="Giovanni's Pickles community moment" /></figure><figure><img src={fanImageThree} alt="Giovanni's Pickles community moment" /></figure></div></div></section>
    </>
  );
}
