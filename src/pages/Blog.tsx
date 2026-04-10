import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Home2Footer from "@/components/home2/Home2Footer";
import ScrollToTop from "@/components/home2/ScrollToTop";
import sobrLogo from "@/assets/sobr-logo-light.png";

export default function Blog() {
  return (
    <div className="min-h-screen sobr-dark bg-sobr-root">
      {/* Nav */}
      <nav className="bg-sobr-root/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={sobrLogo} alt="Sobr" className="h-14 w-auto" />
          </Link>
          <Link
            to="/home2"
            className="text-sobr-text-muted hover:text-sobr-coral transition-colors text-sm font-inter"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sobr-coral/10 text-sobr-coral text-sm font-semibold font-jakarta mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-jakarta text-sobr-text mb-4">
            Insights & Resources
          </h1>
          <p className="text-sobr-text-secondary text-lg font-inter">
            Expert articles, tips, and stories to support your journey toward a healthier relationship with alcohol.
          </p>
        </div>

        {/* Featured post */}
        <Link
          to={`/blog/${blogPosts[0].slug}`}
          className="group block mb-16 rounded-2xl overflow-hidden bg-sobr-card border border-white/5 hover:border-sobr-coral/30 transition-all"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto">
              <img
                src={blogPosts[0].imageUrl}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-sobr-coral/10 text-sobr-coral text-xs font-semibold font-jakarta mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold font-jakarta text-sobr-text mb-3 group-hover:text-sobr-coral transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-sobr-text-secondary font-inter mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-sobr-text-muted font-inter">
                <span>{blogPosts[0].date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {blogPosts[0].readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden bg-sobr-card border border-white/5 hover:border-sobr-coral/30 transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-3 py-1 rounded-full bg-sobr-coral/10 text-sobr-coral text-xs font-semibold font-jakarta mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold font-jakarta text-sobr-text mb-2 group-hover:text-sobr-coral transition-colors">
                  {post.title}
                </h3>
                <p className="text-sobr-text-secondary text-sm font-inter mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-sobr-text-muted font-inter">
                  <div className="flex items-center gap-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-sobr-coral opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Home2Footer />
      <ScrollToTop />
    </div>
  );
}
