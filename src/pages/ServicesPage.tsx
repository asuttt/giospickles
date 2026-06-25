import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { menuCategories, sandwiches } from "@/content/business";
import { usePageMeta } from "@/lib/usePageMeta";

export default function ServicesPage() {
  usePageMeta("/menu", "Menu");
  return <>
    <section className="page-hero pickle-page-hero"><div className="site-container"><p className="eyebrow">Pick your pickle</p><h1>Flavor lives here</h1><p>Our menu changes, our jars rotate, and there is always a reason to come back for one more crunch</p></div></section>
    <section className="section"><div className="site-container"><p className="eyebrow">Pickle sandwiches</p><h2 className="display-heading">The bread is a pickle</h2><div className="sandwich-grid">{sandwiches.map(([name, description], index) => <article className={`sandwich-card card-${index + 1}`} key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{description}</p></article>)}</div><p className="menu-note">Demo menu — full sandwiches, availability, and pricing to be confirmed with Gio's</p></div></section>
    <section className="section flavor-section"><div className="site-container"><p className="eyebrow">The flavor wall</p><h2 className="display-heading">Pick a mood<br />We'll find a jar</h2><div className="flavor-grid">{menuCategories.map((category) => <article className="flavor-card" key={category.title}><h3>{category.title}</h3><p>{category.note}</p><ul>{category.flavors.map((flavor) => <li key={flavor}>{flavor}</li>)}</ul></article>)}</div></div></section>
    <section className="section order-placeholder"><div className="site-container"><p className="eyebrow">Coming soon</p><h2>Order jars, merch, and more</h2><p>This is where pickup ordering, jar shopping, gift cards, and Gio's swag will live when the store tools are ready</p><Link className="button button-secondary" to="/contact">Ask us about catering <ArrowRight /></Link></div></section>
  </>;
}
