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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto text-justify">
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
            {data.text1}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
            {data.text2}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
            {data.text3}
          </p>
        </div>
      </div>
    </div>
  );
}
