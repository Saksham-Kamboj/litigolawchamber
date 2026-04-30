import PageHeroSection from "../components/PageHeroSection";
import AboutImage from "../assets/about-us.avif";

export default function AboutUs() {
  const data = {
    text1: `
Litigo Law Chambers is a full service law firm, with associates in all the major cities of India. The firm has been constituted by a group of young and dynamic lawyers with the aspiration of providing high quality legal service to the clients with a strong emphasis on ethics. The firm strives to ensure highest dedications and professionalism in ensuring excellence to deliver best quality work in time and to ensure the satisfaction of its client.  A group of talented, hard-working, experienced lawyers and other professionals from diverse fields that are integral and related to law are associated with the law firm. Each associate has a speciality of their own and together they combine to form a formidable team capable of handling diverse and complex legal cases.`,
    text2: `Litigo Law Chambers believe in building trusted relationship by developing a deep understanding of the legal needs of the client and by further providing most appropriate and innovative legal solutions to the legal issues of the clients.`,
    text3: `The firm strongly believes that having an infrastructure is quintessential in providing highest quality service to its client. The firm has office in the heart of the capital of Uttarakhand, as well as in other districts which is the primary hub for different business activities and thus ensuring great accessibility to various courts including Hon’ble Supreme Court of India at Delhi, Hon’ble High Court of Uttarakhand at Nainital and various other Forums/Tribunals. `,
  };

  return (
    <div>
      <PageHeroSection
        image={AboutImage}
        title="About Us"
        subtitle="Our Story"
      />
      <div className="py-16 lg:py-24 px-4 lg:px-12 gold-mesh-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Main content */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="gold-line" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400">
                  Our Firm
                </span>
              </div>

              <div className="space-y-6">
                <p className="dark:text-stone-300 text-stone-700 leading-relaxed text-justify font-light">
                  {data.text1}
                </p>
                <p className="dark:text-stone-300 text-stone-700 leading-relaxed text-justify font-light">
                  {data.text2}
                </p>
                <p className="dark:text-stone-300 text-stone-700 leading-relaxed text-justify font-light">
                  {data.text3}
                </p>
              </div>
            </div>

            {/* Right: Stats/Values section */}
            <div className="space-y-8">
              <div className="dark:bg-stone-900/60 bg-stone-100/60 p-8 border dark:border-stone-800 border-stone-200 rounded-lg">
                <h3 className="font-display text-2xl font-light dark:text-stone-100 text-stone-900 mb-6">
                  Our{" "}
                  <span className="italic" style={{ color: "var(--gold)" }}>
                    Values
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    <div>
                      <h4 className="font-medium dark:text-stone-100 text-stone-900 mb-2">
                        Excellence
                      </h4>
                      <p className="text-sm dark:text-stone-400 text-stone-600 leading-relaxed font-light">
                        We strive to deliver the highest quality legal work with
                        unwavering commitment to excellence.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    <div>
                      <h4 className="font-medium dark:text-stone-100 text-stone-900 mb-2">
                        Integrity
                      </h4>
                      <p className="text-sm dark:text-stone-400 text-stone-600 leading-relaxed font-light">
                        Strong emphasis on ethics and professional conduct in
                        all our legal services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-2 h-2 rounded-full mt-2"
                      style={{ backgroundColor: "var(--gold)" }}
                    />
                    <div>
                      <h4 className="font-medium dark:text-stone-100 text-stone-900 mb-2">
                        Dedication
                      </h4>
                      <p className="text-sm dark:text-stone-400 text-stone-600 leading-relaxed font-light">
                        Committed to ensuring client satisfaction through
                        dedicated legal representation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 dark:bg-stone-900/60 bg-stone-100/60 border dark:border-stone-800 border-stone-200 rounded-lg">
                  <div
                    className="text-3xl font-light dark:text-stone-100 text-stone-900 mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    8+
                  </div>
                  <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500">
                    Practice Areas
                  </div>
                </div>
                <div className="text-center p-6 dark:bg-stone-900/60 bg-stone-100/60 border dark:border-stone-800 border-stone-200 rounded-lg">
                  <div
                    className="text-3xl font-light dark:text-stone-100 text-stone-900 mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    100%
                  </div>
                  <div className="text-xs uppercase tracking-widest dark:text-stone-500 text-stone-500">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
