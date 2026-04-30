import PracticeAreaImage from "../assets/practice-area.avif";
import PageHeroSection from "../components/PageHeroSection";
import CivilLitigationIcon from "../assets/court-judge-svgrepo-com.svg";
import CorporateLitigationIcon from "../assets/building-2-svgrepo-com.svg";
import WritPetitionIcon from "../assets/file-pencil-alt-1-svgrepo-com.svg";
import CriminalLitigationIcon from "../assets/handcuffs-prison-svgrepo-com.svg";
import IntellectualPropertyRightsIcon from "../assets/lock-svgrepo-com.svg";
import CorporateCompliancesIcon from "../assets/office-block-town-svgrepo-com.svg";
import ConsumerDisputeRedressalIcon from "../assets/users-chat-talk-svgrepo-com.svg";
import AlternateDisputeResolutionIcon from "../assets/users-user-svgrepo-com.svg";

export default function PracticeArea() {
  const data = [
    {
      icon: CivilLitigationIcon,
      title: "Civil Litigation",
      description:
        "The Firm looks after civil matters by filing and defending various suits including recovery, stay and injunction, contractual disputes, property related matters, consumer disputes, matrimonial disputes and other various type of civil cases. The firm has experience team who looks after the civil cases at all levels including original and appellate Jurisdiction.",
    },
    {
      icon: CriminalLitigationIcon,
      title: "Criminal Litigation",
      description:
        "The firm handles various types of criminal matters at original and appellate level. A well-experienced team handles criminal matters including bail, private complaints, matrimonial disputes, criminal trial, criminal appeal and other related criminal cases. The firm strives to protect the rights of the victim and also ensures fair trial to the accused.",
    },
    {
      icon: CorporateLitigationIcon,
      title: "Corporate Litigation",
      description:
        "The firm files petitions/complaints/cases on behalf of organizations/individuals including financial institutions before the Debt Recovery Tribunals, Real Estate Regulatory Authority, National Company Law Tribunal, Appellate Tribunals, High Courts and the Supreme Court of India. The firm also defends complaints initiated against companies/individuals on Consumer Laws of India.",
    },
    {
      icon: WritPetitionIcon,
      title: "Writ Petition",
      description:
        "The firm strongly believes in the protection of fundamental rights of an individual and thereby, defend the said rights of an individual before High Court and Supreme Court under Article 226 and Article 32, respectively. The scope of these writs includes cases pertaining to the violation and defending of fundamental and other constitutional rights. The firm has successfully raised many social issues in the interest of the public.",
    },
    {
      icon: AlternateDisputeResolutionIcon,
      title: "Alternate Dispute Resolution",
      description:
        "The firm provides a confidential and alternative method of tackling legal disputes which avoids going to court. Apart from Mediation and Conciliation, the firm has successfully handled various Arbitration.  The firm strongly believes in Alternate Dispute Resolution ensuring a win-win situation to the parties.",
    },
    {
      icon: ConsumerDisputeRedressalIcon,
      title: "Consumer Dispute Redressal",
      description:
        "The well-organized sectors of manufacturers, traders and service providers, armed with knowledge of the market and manipulative skills, often attempt to exploit the consumers, despite the existence of provisions in different laws protecting their interest. Our Firm ensures timely and effective protection of the interest of consumers at three-tier quasi-judicial consumer dispute redressal machinery at the National, State and District levels.",
    },
    {
      icon: CorporateCompliancesIcon,
      title: "Corporate Compliances",
      description:
        "The failure of corporate compliance can attract direct and material legal consequences. The firm has a separate corporate team including Chartered Accountants and Company Secretaries which look after the corporate compliances. The firm undertakes incorporation of a company ensuring other corporate compliances including secretariat audit.",
    },
    {
      icon: IntellectualPropertyRightsIcon,
      title: "Intellectual Property Rights",
      description:
        "The firm handles intellectual property rights related matters and ensures the creations are granted certain exclusive rights under various jurisdictions including copyrights, trademarks, patents, industrial design rights and trade secrets. The firm addresses various complex Intellectual property challenges of all type by providing legal solutions covering all aspects of intellectual property and other related areas.",
    },
  ];

  return (
    <div>
      <PageHeroSection
        image={PracticeAreaImage}
        title="Practice Area"
        subtitle="Our Expertise"
      />
      <div className="py-16 lg:py-24 px-4 lg:px-12 gold-mesh-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full border-2 border-gold-400/20 bg-gold-400/5 flex items-center justify-center mb-6 group-hover:border-gold-400 group-hover:bg-gold-400/10 transition-all duration-300">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain filter dark:invert"
                    />
                  </div>
                  <h3 className="font-display text-xl font-light dark:text-stone-100 text-stone-900 mb-4 group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm dark:text-stone-400 text-stone-600 leading-relaxed font-light text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
