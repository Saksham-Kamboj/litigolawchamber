import PageHeroSection from "../components/PageHeroSection";
import Reveal from "../components/Reveal";
import AboutImage from "../assets/about-us.avif";
import { ABOUT_US, AUTHOR } from "../data/siteData";

/* ─── Firm Overview ─────────────────────────────────────────── */
function FirmOverview() {
  const paragraphs = [
    "Litigo Law Chambers is a full service law firm, with associates in all the major cities of India. The firm has been constituted by a group of young and dynamic lawyers with the aspiration of providing high quality legal service to the clients with a strong emphasis on ethics.",
    "The firm strives to ensure highest dedications and professionalism in ensuring excellence to deliver best quality work in time and to ensure the satisfaction of its client. A group of talented, hard-working, experienced lawyers and other professionals from diverse fields that are integral and related to law are associated with the law firm.",
    "Litigo Law Chambers believe in building trusted relationship by developing a deep understanding of the legal needs of the client and by further providing most appropriate and innovative legal solutions to the legal issues of the clients.",
    "The firm strongly believes that having an infrastructure is quintessential in providing highest quality service to its client. The firm has office in the heart of the capital of Uttarakhand, as well as in other districts which is the primary hub for different business activities.",
  ];

  return (
    <section className="py-24 lg:py-10 px-4 lg:px-12 gold-mesh-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal delay={200}>
              <div className="space-y-5 dark:text-stone-400 text-stone-600 font-light leading-relaxed text-justify">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Quote block */}
          <Reveal delay={150}>
            <div className="relative">
              <div className="dark:bg-stone-900 bg-stone-100 p-10 lg:p-14 relative overflow-hidden">
                {/* Decorative corners */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 border-t border-r"
                  style={{ borderColor: "var(--gold)", opacity: 0.3 }}
                />
                <div
                  className="absolute bottom-0 left-0 w-24 h-24 border-b border-l"
                  style={{ borderColor: "var(--gold)", opacity: 0.3 }}
                />

                <div className="quote-mark mb-4">"</div>
                <blockquote className="font-display text-2xl lg:text-3xl font-light italic dark:text-stone-200 text-stone-800 leading-snug mb-6 text-justify">
                  {ABOUT_US.quote.text}
                </blockquote>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-px"
                    style={{ background: "var(--gold)" }}
                  />
                  <div>
                    <div className="text-sm font-medium dark:text-stone-200 text-stone-800">
                      {AUTHOR.name}
                    </div>
                    <div className="text-xs dark:text-stone-500 text-stone-500 tracking-wider">
                      {AUTHOR.founder}
                    </div>
                  </div>
                </div>
              </div>
              {/* Offset accent */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 -z-10"
                style={{
                  background: "var(--gold-dim)",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <div>
      <PageHeroSection
        image={AboutImage}
        title="About Us"
        subtitle="Our Story"
      />
      <FirmOverview />
    </div>
  );
}
