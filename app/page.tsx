import { Car, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const WHATSAPP = "+265999000000";
const EMAIL = "info@malawimotors.mw";

const vehicles = [
  {
    id: 1,
    name: "Toyota Land Cruiser 200",
    year: 2019,
    price: "USD 45,000",
    mileage: "62,000 km",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
  },
  {
    id: 2,
    name: "Nissan Navara NP300",
    year: 2020,
    price: "USD 22,500",
    mileage: "48,000 km",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80",
  },
  {
    id: 3,
    name: "Toyota Hilux D/Cab 4×4",
    year: 2021,
    price: "USD 28,000",
    mileage: "35,000 km",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
  },
  {
    id: 4,
    name: "Mitsubishi Pajero Sport",
    year: 2018,
    price: "USD 19,000",
    mileage: "80,000 km",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1549399542-7e8ee8c5e9b0?w=800&q=80",
  },
];

const benefits = [
  "Vehicles inspected before purchase",
  "Full import documentation handled",
  "Competitive shipping rates to Blantyre & Lilongwe",
  "Financing options available",
  "After-sales support",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[--brand] text-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Car className="h-6 w-6 text-[--accent]" />
            Malawi Motors
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#stock" className="hover:text-[--accent]">
              Stock
            </a>
            <a href="#why" className="hover:text-[--accent]">
              Why Us
            </a>
            <a href="#enquire" className="hover:text-[--accent]">
              Enquire
            </a>
          </nav>
          <a
            href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-[--accent] px-3 py-1.5 text-sm font-semibold text-white hover:opacity-90"
          >
            WhatsApp Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80)",
        }}
      >
        <div className="absolute inset-0 bg-[--brand]/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-6xl">
            Quality Vehicles,
            <br />
            Delivered to Malawi
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200">
            We source reliable Japanese and South African vehicles and handle
            every step of the import process — so you drive away stress-free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#stock"
              className="rounded-lg bg-[--accent] px-6 py-3 font-semibold hover:opacity-90"
            >
              Browse Stock
            </a>
            <a
              href="#enquire"
              className="rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              Custom Order
            </a>
          </div>
        </div>
      </section>

      {/* Stock */}
      <section id="stock" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Current Stock
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{v.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {v.year} · {v.mileage} · {v.fuel}
                  </p>
                  <p className="text-xl font-extrabold text-[--brand] mb-4">
                    {v.price}
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=Hi,%20I'm%20interested%20in%20the%20${encodeURIComponent(v.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center rounded bg-[--brand] py-2 text-sm font-semibold text-white hover:opacity-90"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">Why Choose Malawi Motors?</h2>
          <ul className="space-y-4 text-left">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[--accent]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Enquire */}
      <section id="enquire" className="bg-[--brand] py-16 text-white">
        <div className="mx-auto max-w-xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-gray-300">
            Don't see what you need? Tell us your requirements and we'll source
            it for you.
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold hover:bg-green-600"
            >
              <Phone className="h-5 w-5" />
              WhatsApp {WHATSAPP}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 rounded-lg border border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-sm text-gray-500">
        <div className="flex justify-center items-center gap-1 mb-2">
          <MapPin className="h-4 w-4" />
          <span>Blantyre, Malawi</span>
        </div>
        <p>© {new Date().getFullYear()} Malawi Motors. All rights reserved.</p>
      </footer>
    </div>
  );
}
