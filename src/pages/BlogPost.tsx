import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";
import sobrLogo from "@/assets/sobr-logo-light.png";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for ## headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold font-jakarta text-sobr-text mt-10 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      return (
        <p key={i} className="text-sobr-text-secondary font-inter leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen sobr-dark bg-sobr-root">
      {/* Nav */}
      <nav className="bg-sobr-root/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/home2" className="flex items-center gap-2">
            <img src={sobrLogo} alt="Sobr" className="h-8 w-auto" />
          </Link>
          <Link
            to="/blog"
            className="text-sobr-text-muted hover:text-sobr-coral transition-colors text-sm font-inter flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Articles
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-sobr-coral/10 text-sobr-coral text-xs font-semibold font-jakarta mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-jakarta text-sobr-text mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-sobr-text-muted font-inter">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Content */}
          <div>{renderContent(post.content)}</div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/5">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sobr-coral hover:text-sobr-primary-light transition-colors font-inter font-semibold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>
        </article>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
}
