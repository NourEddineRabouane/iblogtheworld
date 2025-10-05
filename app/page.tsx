import Link from "next/link";
import { ArrowRight, Sparkles, TrendingUp, Users, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Welcome to the future of blogging</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Discover{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  The World
                </span>{" "}
                Through Words
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Explore captivating stories, insightful perspectives, and unique
                voices from writers around the globe. Your next favorite read is
                just a click away.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp size={16} className="text-primary" />
                  <span>10K+ Articles</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} className="text-primary" />
                  <span>500+ Writers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span>Fresh Daily</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  Explore Articles
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-border bg-background px-8 py-3 rounded-lg font-medium hover:bg-accent transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div className="relative">
              {/* Gradient Orbs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

              {/* Feature Cards Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Trending Topics
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Stay updated with what's hot
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Expert Writers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn from the best minds
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Daily Updates
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fresh content every day
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 mt-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Curated Content
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Handpicked for quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
