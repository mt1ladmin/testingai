import { ArrowRight, Check, ChevronRight, CircleCheck, Menu, MessageCircle, ShieldCheck, Ship, Sparkles, X } from "lucide-react";
import { useState } from "react";

const vehicles = [
  { name: "Toyota RAV4", year: "2021", price: "£18,950", type: "SUV", fuel: "Hybrid", image: "https://images.unsplash.com/photo-1568844293986-ca4d0d9e4f0f?auto=format&fit=crop&w=1200&q=85" },
  { name: "Toyota Hilux", year: "2020", price: "£22,500", type: "Pickup", fuel: "Diesel", image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=85" },
  { name: "Mercedes-Benz GLC", year: "2022", price: "£31,750", type: "SUV", fuel: "Diesel", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("home")}><span>M</span> MALAWI MOTORS</button>
          <div className={`nav-links ${open ? "show" : ""}`}>
            <button onClick={() => scrollTo("vehicles")}>Vehicles</button>
            <button onClick={() => scrollTo("process")}>How it works</button>
            <button onClick={() => scrollTo("about")}>About us</button>
            <button className="nav-cta" onClick={() => scrollTo("enquiry")}>Request a vehicle <ArrowRight size={16}/></button>
          </div>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow"><span className="dot"/> VEHICLES SOURCED FOR MALAWI</div>
          <h1>The right vehicle.<br/><em>Without the hassle.</em></h1>
          <p>We source quality vehicles to your requirements, handle the buying process and arrange export to Malawi.</p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => scrollTo("enquiry")}>Tell us what you need <ArrowRight size={18}/></button>
            <button className="button ghost" onClick={() => scrollTo("vehicles")}>View available vehicles</button>
          </div>
          <div className="trust-row">
            <span><ShieldCheck size={17}/> Carefully sourced</span>
            <span><Ship size={17}/> Export arranged</span>
            <span><CircleCheck size={17}/> Clear pricing</span>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container intro-grid">
          <div>
            <p className="label">A simpler way to source</p>
            <h2>From finding the vehicle to getting it to Malawi.</h2>
          </div>
          <p className="intro-copy">Whether you know exactly what you want or need help choosing, we manage the sourcing process from start to finish — with straightforward communication at every step.</p>
        </div>
      </section>

      <section id="vehicles" className="section">
        <div className="container">
          <div className="section-head">
            <div><p className="label">Available now</p><h2>Vehicles worth looking at.</h2></div>
            <button className="text-button" onClick={() => scrollTo("enquiry")}>Looking for something else? <ArrowRight size={16}/></button>
          </div>
          <div className="vehicle-grid">
            {vehicles.map(v => (
              <article className="vehicle-card" key={v.name}>
                <div className="vehicle-image"><img src={v.image} alt={v.name}/><span>{v.year}</span></div>
                <div className="vehicle-info">
                  <div><p className="vehicle-type">{v.type} · {v.fuel}</p><h3>{v.name}</h3></div>
                  <div className="vehicle-bottom"><strong>{v.price}</strong><button onClick={() => scrollTo("enquiry")} aria-label={`Enquire about ${v.name}`}><ChevronRight/></button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="container">
          <div className="process-intro"><p className="label">How it works</p><h2>One clear process.<br/>No guesswork.</h2><p>We take care of the details so you don't have to navigate the sourcing and export process alone.</p></div>
          <div className="steps">
            {[
              ["01", "Tell us what you need", "Share your preferred make, model, budget and any requirements."],
              ["02", "We source & inspect", "We search the market, shortlist suitable vehicles and check the details."],
              ["03", "You approve", "You receive the vehicle details and costs before committing."],
              ["04", "We arrange export", "Once approved, we handle the export process and keep you updated."]
            ].map(s => <div className="step" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-photo"><div className="photo-label">SOURCE · CHECK · DELIVER</div></div>
          <div className="about-copy"><p className="label">Why Malawi Motors</p><h2>Good vehicles. Clear decisions. Reliable service.</h2><p>Buying a vehicle internationally can be complicated. We make the process easier by acting as your sourcing partner — finding suitable vehicles, explaining the costs and coordinating the journey to Malawi.</p><ul><li><Check/> Sourcing based on your actual requirements</li><li><Check/> Transparent vehicle and export costs</li><li><Check/> Regular communication throughout the process</li><li><Check/> Support from sourcing through export</li></ul></div>
        </div>
      </section>

      <section id="enquiry" className="enquiry">
        <div className="container enquiry-grid">
          <div><p className="label">Start your search</p><h2>Tell us what you're looking for.</h2><p>Not sure which vehicle is right? That's fine. Give us the basics and we'll come back to you with suitable options.</p><div className="contact-note"><MessageCircle/> <div><strong>Prefer WhatsApp?</strong><span>Message us directly and we'll respond.</span></div></div></div>
          <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true)}} className="form">
            {submitted ? <div className="success"><Sparkles size={28}/><h3>Enquiry received.</h3><p>Thanks — we'll be in touch with you about your vehicle requirements.</p><button type="button" className="button primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <>
              <div className="form-row"><label>Name<input required placeholder="Your name"/></label><label>Phone / WhatsApp<input required placeholder="+265 ..."/></label></div>
              <div className="form-row"><label>Email<input type="email" placeholder="you@example.com"/></label><label>Budget<input placeholder="e.g. £15,000"/></label></div>
              <label>What vehicle are you looking for?<textarea required rows={4} placeholder="Make/model, year, fuel type, transmission, colour or anything else that matters..."/></label>
              <label>Anything else we should know?<textarea rows={3} placeholder="Tell us about your requirements or questions..."/></label>
              <button className="button primary full" type="submit">Send vehicle enquiry <ArrowRight size={18}/></button>
              <small>We'll only use your details to respond to this enquiry.</small>
            </>}
          </form>
        </div>
      </section>

      <footer><div className="container footer-grid"><div><button className="brand footer-brand"><span>M</span> MALAWI MOTORS</button><p>Vehicle sourcing and export to Malawi.</p></div><div><p className="footer-title">Explore</p><button onClick={() => scrollTo("vehicles")}>Vehicles</button><button onClick={() => scrollTo("process")}>How it works</button><button onClick={() => scrollTo("about")}>About us</button></div><div><p className="footer-title">Contact</p><a href="mailto:hello@malawimotors.example">hello@malawimotors.example</a><a href="https://wa.me/265000000000">WhatsApp us</a></div></div><div className="container footer-bottom"><span>© 2026 Malawi Motors</span><span>Built for straightforward vehicle sourcing.</span></div></footer>
    </main>
  );
}