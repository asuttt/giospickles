import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/content/business";
import { usePageMeta } from "@/lib/usePageMeta";

const menuSections = [
  {
    id: "pickle-sandwiches",
    eyebrow: "No bread needed",
    title: "Pickle Sandwiches",
    note: "Hoagie-style builds served between pickle halves",
    items: [
      ["Giovanni Italian Pickle Hoagie", "Italian meats, cheese, and the house pickle crunch"],
      ["Turkey & Cheese Pickle Hoagie", "Turkey and cheese stacked between pickle halves"],
      ["Ham & Cheese Hoagie", "Savory ham, creamy cheese, and a crisp pickle bite"],
      ["Dill or No Dill", "Hot ham, hot peppers, and Gio sauce"],
      ["Pickle Reuben", "A tangy twist on the deli classic"],
      ["The Farmer in the Dill", "Ham, turkey, cheese, and bacon"],
      ["Fabs Cheeseburger", "Cheeseburger flavor with a pickle-shop spin"],
      ["Cuban Melt", "A melty, savory sandwich-board favorite"],
    ],
  },
  {
    id: "pickle-boats",
    eyebrow: "Fork optional",
    title: "Pickle Boats",
    note: "Loaded pickle halves piled with savory toppings",
    items: [
      ["BLT Pickle Boat", "Bacon, lettuce, and tomato on a pickle base"],
      ["Buffalo Dilly Chicken", "Buffalo chicken with tangy pickle crunch"],
      ["BBQ Dilly Chicken", "Chicken, BBQ flavor, and pickle bite"],
      ["Chicken Bacon Ranch Pickle Boat", "Chicken, bacon, ranch, and crunch"],
      ["Philly Dilly Cheesesteak Boat", "Cheesesteak flavor in pickle-boat form"],
      ["Tasty Taco Pickle Boat", "Taco-inspired toppings over a pickle boat"],
      ["Florence Boat", "Tomato, mozzarella, basil, and balsamic"],
      ["Chicken Salad Sammy", "Chicken salad served Gio’s way"],
    ],
  },
  {
    id: "small-bites",
    eyebrow: "Start here",
    title: "Small Bites",
    note: "Crunchy, shareable, and built for pickle people",
    items: [
      ["Pickle Spears", "Cold, crisp spears with big briny energy"],
      ["Battered Fried Pickles", "Golden fried pickles served with Gio sauce"],
      ["Pickle De Gallo", "A bright, briny condiment made to pile onto sandwiches and snacks"],
    ],
  },
  {
    id: "more",
    eyebrow: "Rotating extras",
    title: "Pizza, Sweets, & Swag",
    note: "Availability may rotate as the new location settles in",
    items: [
      ["Pickle Pizza", "A pickle-powered pizza option for the truly committed"],
      ["Chicken Bacon Ranch Pickle Pizza", "The big CBR flavor profile, pizza edition"],
      ["Desserts", "Sweet escapes for after the brine"],
    ],
  },
];

const menuAnchors = menuSections.map(({ id, title }) => ({ id, title }));

export default function ServicesPage() {
  usePageMeta("/menu", "Menu");

  return (
    <>
      <section className="menu-board-intro">
        <div className="site-container menu-board-intro-grid">
          <div>
            <p className="eyebrow">Gio's menu</p>
            <h1>Sandwiches, boats, & bites</h1>
          </div>
          <nav className="menu-jump-list" aria-label="Menu sections">
            {menuAnchors.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="menu-board">
        <div className="site-container menu-board-grid">
          {menuSections.map((section) => (
            <article className="menu-category-card" id={section.id} key={section.id}>
              <div className="menu-category-heading">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.note}</p>
              </div>
              <div className="menu-item-list">
                {section.items.map(([name, description]) => (
                  <div className="menu-item" key={name}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section flavor-section menu-flavor-wall" id="flavor-wall">
        <div className="site-container">
          <div className="menu-section-header">
            <p className="eyebrow">Flavor Wall</p>
            <h2 className="display-heading">50+ ways to find<br />your favorite crunch</h2>
            <p>
              Flavors rotate with the season, the batch, and whatever Gio is excited about making next. Ask
              what's fresh, limited, or Gio's new favorite
            </p>
          </div>
          <div className="flavor-chip-board">
            {menuCategories.map((category) => (
              <article className="flavor-chip-group" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.note}</p>
                <div className="flavor-chip-groups">
                  {category.groups.map((group, groupIndex) => (
                    <div className="flavor-chip-cluster" key={group.label ?? groupIndex}>
                      {group.label && <h4>{group.label}</h4>}
                      <div>
                        {group.flavors.map((flavor) => (
                          <span key={flavor}>{flavor}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section order-placeholder menu-order-panel">
        <div className="site-container menu-order-grid">
          <div className="menu-order-heading">
            <p className="eyebrow">Coming soon</p>
            <h2>Online orders, jars, & gear</h2>
          </div>
          <div className="menu-order-copy">
            <p>
              We are getting the new shop settled first. Soon, you will be able to order ahead, plan party trays,
              grab packaged pickles, and shop Gio’s merch right from here
            </p>
          </div>
          <div className="menu-order-actions">
            <a className="button button-primary" href="mailto:giospickles@gmail.com">
              Ask About Catering <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
