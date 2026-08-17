'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Search, Tag, TrendingUp, BookOpen, ChevronRight } from 'lucide-react';

// --- Blog Data ---
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  featured?: boolean;
}

const categories = [
  'All',
  'GST',
  'Income Tax',
  'Company Law',
  'DGFT',
  'Compliance',
  'Advisory',
];

const blogPosts: BlogPost[] = [
  {
    id: 'gst-annual-return-guide-2026',
    title: 'GSTR-9 Annual Return Filing: Complete Guide for FY 2025-26',
    excerpt: 'A comprehensive walkthrough on filing the GST Annual Return (GSTR-9), covering common errors, reconciliation tips, and the latest amendments that every business must know before the deadline.',
    category: 'GST',
    date: 'Aug 10, 2026',
    readTime: '8 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
    featured: true,
  },
  {
    id: 'new-tax-regime-vs-old-regime',
    title: 'New Tax Regime vs Old Regime: Which One Should You Choose in AY 2027-28?',
    excerpt: 'With the new tax regime becoming the default, here is a detailed comparison with real-world examples to help salaried individuals and professionals make the right choice.',
    category: 'Income Tax',
    date: 'Aug 5, 2026',
    readTime: '6 min read',
    author: 'CA Megha Jain',
    authorRole: 'Partner',
    featured: true,
  },
  {
    id: 'company-incorporation-checklist',
    title: '10-Step Checklist for Incorporating a Private Limited Company in India',
    excerpt: 'From choosing the right business structure to obtaining the Certificate of Incorporation, follow this step-by-step guide with all ROC requirements and timelines.',
    category: 'Company Law',
    date: 'Jul 28, 2026',
    readTime: '7 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
  },
  {
    id: 'dgft-advance-authorization-benefits',
    title: 'Advance Authorization Under DGFT: How Exporters Can Save on Import Duties',
    excerpt: 'Understanding the Advance Authorization scheme, eligibility criteria, application process, and how it helps exporters significantly reduce their import duty burden.',
    category: 'DGFT',
    date: 'Jul 20, 2026',
    readTime: '5 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
  },
  {
    id: 'gst-refund-on-exports',
    title: 'How to Claim GST Refund on Exports: Step-by-Step Process',
    excerpt: 'Exporters are entitled to GST refunds under zero-rated supply provisions. Learn the types of refunds available, documentation required, and how to avoid common rejection grounds.',
    category: 'GST',
    date: 'Jul 12, 2026',
    readTime: '6 min read',
    author: 'CA Megha Jain',
    authorRole: 'Partner',
  },
  {
    id: 'iepf-unclaimed-shares-recovery',
    title: 'Recovering Unclaimed Shares & Dividends from IEPF: Everything You Need to Know',
    excerpt: 'If your shares or dividends have been transferred to IEPF, here is a detailed guide on how to file a claim, documentation needed, and the expected timeline for recovery.',
    category: 'Compliance',
    date: 'Jul 5, 2026',
    readTime: '5 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
  },
  {
    id: 'internal-audit-icfr-importance',
    title: 'Why Internal Audit & ICFR Testing Is Critical for Growing Businesses',
    excerpt: 'Internal controls are no longer optional. Learn why companies above the prescribed thresholds need ICFR frameworks and how internal audits strengthen operational resilience.',
    category: 'Advisory',
    date: 'Jun 28, 2026',
    readTime: '7 min read',
    author: 'CA Megha Jain',
    authorRole: 'Partner',
  },
  {
    id: 'tds-on-immovable-property',
    title: 'TDS on Sale of Immovable Property Under Section 194-IA: Buyer\'s Obligations',
    excerpt: 'A practical guide for property buyers on their TDS obligations under Section 194-IA, including rate, threshold, Form 26QB filing, and penalty provisions for non-compliance.',
    category: 'Income Tax',
    date: 'Jun 20, 2026',
    readTime: '5 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
  },
  {
    id: 'dubai-uae-vat-registration',
    title: 'Setting Up Business in Dubai: Free Zone vs Mainland & UAE VAT Compliance',
    excerpt: 'Comparing Free Zone, Mainland, and Offshore structures in UAE. Plus, a guide to UAE VAT registration, return filing, and compliance obligations for Indian entrepreneurs.',
    category: 'Advisory',
    date: 'Jun 15, 2026',
    readTime: '9 min read',
    author: 'CA Piyush Jain',
    authorRole: 'Founder & Partner',
  },
];

// Category color map
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'GST': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Income Tax': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Company Law': { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  'DGFT': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Compliance': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  'Advisory': { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
};

export default function BlogPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== 'All' || searchQuery !== '');

  const showFeatured = activeCategory === 'All' && searchQuery === '';

  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans text-[#0f1b29]">

      {/* Hero Section */}
      <section className="relative pt-16 pb-16 px-6 lg:px-12 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute top-20 right-0 w-[400px] h-[300px] bg-blue-500/3 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          {/* <div className="flex items-center gap-2 text-sm text-[#596778] mb-8">
            <Link href="/" className="hover:text-[#d8a379] transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#0f1b29] font-semibold">Blog</span>
          </div> */}

          <div className="text-center max-w-3xl mx-auto">
            <span className="flex items-center justify-center gap-2 text-[#d8a379] text-sm font-bold tracking-widest uppercase mb-4 mx-auto">
              <BookOpen size={16} />
              INSIGHTS & RESOURCES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0f1b29] mb-6 leading-tight tracking-tight">
              Expert Perspectives on{' '}
              <br className="hidden md:block" />
              <span className="text-[#d8a379]">Tax, Law & Finance</span>
            </h1>
            <p className="text-lg md:text-xl text-[#596778] leading-relaxed max-w-2xl mx-auto">
              Practical insights, regulatory updates, and professional guidance from our team of Chartered Accountants.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 text-[#0f1b29] pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:border-[#d8a379] focus:ring-1 focus:ring-[#d8a379] transition-all placeholder:text-gray-400 shadow-sm"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-[#0f1b29] text-white border-[#0f1b29] shadow-md'
                    : 'bg-white text-[#596778] border-gray-200 hover:border-[#d8a379] hover:text-[#d8a379]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {showFeatured && featuredPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#d8a379] to-orange-400 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              <TrendingUp size={14} />
              Featured
            </div>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => {
              const catColor = categoryColors[post.category] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
              return (
                <article
                  key={post.id}
                  className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Accent top bar */}
                  <div className="h-1 bg-gradient-to-r from-[#d8a379] to-orange-400"></div>

                  <div className="p-8 lg:p-10">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`inline-flex items-center gap-1.5 ${catColor.bg} ${catColor.text} border ${catColor.border} px-3 py-1 rounded-lg text-xs font-bold`}>
                        <Tag size={12} />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl lg:text-2xl font-bold text-[#0f1b29] mb-4 leading-snug group-hover:text-[#d8a379] transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[#596778] text-[0.95rem] leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-sm font-bold text-[#0f1b29]">{post.author}</p>
                        <p className="text-xs text-[#596778]">{post.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#d8a379] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Read Article
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pb-24">
        {!showFeatured && (
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-bold text-[#0f1b29] whitespace-nowrap">
              {activeCategory === 'All' ? 'Search Results' : activeCategory}
              <span className="text-gray-400 font-normal ml-2 text-sm">({filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''})</span>
            </h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
        )}

        {showFeatured && (
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-bold text-[#0f1b29] whitespace-nowrap">
              All Articles
              <span className="text-gray-400 font-normal ml-2 text-sm">({blogPosts.length - featuredPosts.length} more)</span>
            </h2>
            <div className="h-px flex-grow bg-gray-200"></div>
          </div>
        )}

        {(showFeatured ? blogPosts.filter((p) => !p.featured) : filteredPosts).length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 text-gray-400 mb-6">
              <Search size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0f1b29] mb-2">No articles found</h3>
            <p className="text-[#596778]">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showFeatured ? blogPosts.filter((p) => !p.featured) : filteredPosts).map((post) => {
              const catColor = categoryColors[post.category] || { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' };
              return (
                <article
                  key={post.id}
                  className="group bg-white rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="p-7 flex flex-col flex-grow">
                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`inline-flex items-center gap-1.5 ${catColor.bg} ${catColor.text} border ${catColor.border} px-2.5 py-0.5 rounded-md text-[0.7rem] font-bold`}>
                        <Tag size={10} />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-[0.7rem]">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0f1b29] mb-3 leading-snug group-hover:text-[#d8a379] transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#596778] text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                      <div>
                        <p className="text-xs font-bold text-[#0f1b29]">{post.author}</p>
                        <p className="text-[0.7rem] text-gray-400">{post.date}</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-300 group-hover:text-[#d8a379] group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#0b131e] py-20 px-6 lg:px-12 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[#d8a379]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#d8a379] text-sm font-bold tracking-widest uppercase block mb-4">
            STAY INFORMED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Get Expert Insights Delivered <br className="hidden md:block" />to Your Inbox
          </h2>
          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Join 2,000+ professionals who receive our curated insights on tax updates, regulatory changes, and strategic financial guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#1f2d3d]/50 border border-white/10 text-white px-6 py-4 rounded-xl w-full focus:outline-none focus:border-[#d8a379] focus:ring-1 focus:ring-[#d8a379] transition-all placeholder:text-[#596778]"
            />
            <button className="bg-gradient-to-r from-[#d8a379] to-orange-400 hover:from-orange-400 hover:to-orange-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-[0_4px_15px_rgba(216,163,121,0.3)] hover:shadow-[0_6px_20px_rgba(216,163,121,0.5)] shrink-0 whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
          <p className="text-[#596778] text-xs mt-4">
            No spam, unsubscribe anytime. We respect your inbox.
          </p>
        </div>
      </section>

    </div>
  );
}
