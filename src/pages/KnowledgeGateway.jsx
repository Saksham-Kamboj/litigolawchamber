import ArticleSection from "../components/KnowledgeGateway/ArticleSection";
import NewsSection from "../components/KnowledgeGateway/NewsSection";
import PageHeroSection from "../components/PageHeroSection";
import KnowledgeGatewayHeroImage from "../assets/knowledge-gateway.avif";

export default function KnowledgeGateway() {
  return (
    <div>
      <PageHeroSection
        image={KnowledgeGatewayHeroImage}
        title="Knowledge Gateway"
        subtitle="Stay updated with the latest legal insights"
      />
      <NewsSection />
      <ArticleSection />
    </div>
  );
}
