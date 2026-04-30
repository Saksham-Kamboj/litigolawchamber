import { useState } from "react";
import Reveal from "../Reveal";
import { CONTACT_DATA } from "../../data/siteData";
import { Link } from "react-router-dom";

function ContactItem({ icon, label, children }) {
  return (
    <div className="flex gap-5 items-start group">
      <div className="w-10 h-10 border border-stone-700 group-hover:border-gold-400 flex items-center justify-center shrink-0 transition-colors">
        <span className="text-stone-400 group-hover:text-gold-400 transition-colors">
          {icon}
        </span>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-stone-500 mb-1">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}

const LocationIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const getIcon = (iconName) => {
  switch (iconName) {
    case "location":
      return <LocationIcon />;
    case "building":
      return <BuildingIcon />;
    case "email":
      return <EmailIcon />;
    case "phone":
      return <PhoneIcon />;
    default:
      return null;
  }
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="py-24 lg:py-36 px-4 lg:px-12 gold-mesh-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-line" />
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
              {CONTACT_DATA.badge}
            </span>
            <div className="gold-line" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-light dark:text-stone-100 text-stone-900 mb-8 leading-tight">
            {CONTACT_DATA.mainHeading.line1}{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>
              {CONTACT_DATA.mainHeading.italicText}
            </span>
          </h2>
          <p className="dark:text-stone-400 text-stone-600 text-lg max-w-2xl mx-auto font-light">
            {CONTACT_DATA.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-line" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                {CONTACT_DATA.badge}
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-stone-800 dark:text-stone-100 leading-tight mb-6">
              {CONTACT_DATA.leftHeading.line1}
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>
                {CONTACT_DATA.leftHeading.italicText}
              </span>
            </h2>
            <p className="text-stone-400 font-light leading-relaxed mb-12">
              {CONTACT_DATA.leftDescription}
            </p>

            <div className="space-y-8">
              {CONTACT_DATA.contactItems.map((item) => (
                <ContactItem
                  key={item.id}
                  icon={getIcon(item.icon)}
                  label={item.label}
                >
                  {/* Address type */}
                  {item.type === "address" && (
                    <address className="not-italic dark:text-stone-300 text-stone-500 font-light text-sm leading-relaxed">
                      {item.content.line1}
                      <br />
                      {item.content.line2}
                    </address>
                  )}

                  {/* Email type */}
                  {item.type === "email" && (
                    <div className="space-y-1">
                      {item.content.map((emailItem, idx) => (
                        <Link
                          key={idx}
                          to={emailItem.href}
                          className="text-stone-500 hover:text-gold-400 font-light text-sm transition-colors block dark:text-stone-300"
                        >
                          {emailItem.email}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Phone type */}
                  {item.type === "phone" && (
                    <div className="space-y-1">
                      {item.content.map((phoneItem, idx) => (
                        <Link
                          key={idx}
                          to={phoneItem.href}
                          className="text-stone-500 hover:text-gold-400 font-light text-sm transition-colors block dark:text-stone-300"
                        >
                          {phoneItem.number}
                        </Link>
                      ))}
                    </div>
                  )}
                </ContactItem>
              ))}
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal delay={150}>
            <div className="dark:bg-stone-900/60 bg-stone-100/60 p-6 border dark:border-stone-800 border-stone-200">
              <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-6">
                Send a Message
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest dark:text-stone-500 text-stone-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full dark:bg-stone-800/40 bg-stone-100/40 border dark:border-stone-700 border-stone-300 dark:text-stone-100 text-stone-900 dark:placeholder-stone-500 placeholder-stone-400 px-4 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest dark:text-stone-500 text-stone-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full dark:bg-stone-800/40 bg-stone-100/40 border dark:border-stone-700 border-stone-300 dark:text-stone-100 text-stone-900 dark:placeholder-stone-500 placeholder-stone-400 px-4 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest dark:text-stone-500 text-stone-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full dark:bg-stone-800/40 bg-stone-100/40 border dark:border-stone-700 border-stone-300 dark:text-stone-100 text-stone-900 dark:placeholder-stone-500 placeholder-stone-400 px-4 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest dark:text-stone-500 text-stone-600 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full dark:bg-stone-800/40 bg-stone-100/40 border dark:border-stone-700 border-stone-300 dark:text-stone-100 text-stone-900 dark:placeholder-stone-500 placeholder-stone-400 px-4 py-2 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all resize-none"
                    placeholder="Tell us about your legal matter..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-stone-900 px-8 py-3 font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: "var(--gold)" }}
                >
                  Send Message
                </button>
                <p className="text-xs dark:text-stone-600 text-stone-500 text-center">
                  Your information is confidential and protected.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
