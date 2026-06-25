import { ArrowRight, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/demo/pickle-sandwich-cutout.png";
import fanImageOne from "@/assets/demo/fan1.jpg";
import fanImageTwo from "@/assets/demo/fan2.jpg";
import fanImageThree from "@/assets/demo/fan3.jpg";
import homeplateImage from "@/assets/demo/homeplate.jpg";
import { business, sandwiches } from "@/content/business";
import { getMapsUrl } from "@/lib/maps";
import { usePageMeta } from "@/lib/usePageMeta";

export default function HomePage() {
  usePageMeta("/", "Home");
  const mapsUrl = getMapsUrl(business.address);

  return (
    <>
      <section className="pickle-hero light-hero">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">New Hope's crunchiest little obsession</p>
            <h1>Big flavor,<br /><i>Zero</i> bread</h1>
            <p>Pickle sandwiches, 50+ flavors, and the kind of variety that keeps life delicious</p>
            <div className="hero-actions"><Link className="button button-primary" to="/menu">See the Menu <ArrowRight aria-hidden="true" /></Link></div>
            <div className="quick-actions" aria-label="Explore Gio's Pickles"><Link to="/menu"><strong>Pickle<br />sandwiches</strong><span>→</span></Link><Link to="/menu"><strong>Flavor<br />wall</strong><span>→</span></Link><Link to="/contact"><strong>Events &<br />catering</strong><span>→</span></Link></div>
          </div>
          <div className="hero-product"><span>The Original</span><img src={heroImage} alt="Turkey and cheese pickle sandwich" /></div>
        </div>
      </section>
      <section className="intro-strip"><p>Not your average pickle jar</p><strong>50+ flavors · Pickle sandwiches · Local weirdness welcome</strong></section>
      <section className="section"><div className="site-container"><p className="eyebrow">The main event</p><h2 className="display-heading">A sandwich in a pickle<br />Obviously</h2><div className="sandwich-grid">{sandwiches.map(([name, description], index) => <article className={`sandwich-card card-${index + 1}`} key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p></article>)}</div><Link className="text-link" to="/menu"><span className="text-trigger-label">Explore All Flavors & Bites</span> <ArrowRight /></Link></div></section>
      <section className="section community-section"><div className="site-container community-grid"><div><p className="eyebrow">Made for New Hope</p><h2 className="display-heading">A little bit deli<br />A little bit unhinged</h2><p className="large-copy">We make the good kind of mess: jars at the counter, opinions on every flavor, and a place to stop in, say hi, and leave with something crunchy</p><Link className="button button-primary" to="/about">Meet Gio's</Link></div><figure className="polaroid-placeholder"><img src={homeplateImage} alt="Giovanni's Pickles in New Hope" /></figure></div></section>
      <section className="visit-band"><a className="visit-trigger map-trigger" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin /><span className="text-trigger-label">{business.address}</span></a><Link className="visit-trigger" to="/contact"><span className="text-trigger-label">Hours & Directions</span> <ArrowRight /></Link><a className="visit-trigger" id="order" href="mailto:giospickles@gmail.com"><ShoppingBag /> <span className="text-trigger-label">Online ordering coming soon</span></a></section>
      <section className="section home-photo-wall"><div className="site-container"><p className="eyebrow">The photo wall</p><h2 className="display-heading">This bit is for the regulars</h2><div className="photo-wall"><figure><img src={fanImageOne} alt="Giovanni's Pickles community moment" /></figure><figure><img src={fanImageTwo} alt="Giovanni's Pickles community moment" /></figure><figure><img src={fanImageThree} alt="Giovanni's Pickles community moment" /></figure></div></div></section>
    </>
  );
}
