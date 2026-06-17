import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleJsonLd } from '../components/ArticleJsonLd';
import { TagList } from '../components/TagList';
import { BLOG_BASE_PATH } from '../constants';
import { formatDate } from '../format';
import { blog } from '../lib/blog-client';
import '../blog-content.css';

export const dynamic = 'force-dynamic';

// Return [] so no article pages are pre-rendered at build time.
// Articles are served on-demand via ISR (revalidate = 86400).
// This avoids hitting the API rate limit (max 2 req/s) during concurrent
// static generation. Vercel ISR caches each article after its first request.
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: 'Article | Moderate Murmurations',
    description: 'Insights from Moderate Murmurations.',
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await blog.getArticleBySlug(slug);
  if (!article || !article.published) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <ArticleJsonLd data={article.jsonLd} />
        <ArticleJsonLd data={article.faqJsonLd} />

        <Link
          href={BLOG_BASE_PATH}
          className="text-sm font-medium text-gray-500 transition hover:text-gray-700"
        >
          ← All articles
        </Link>

        <article className="mt-6">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {article.title}
            </h1>
            <time dateTime={article.created_at} className="mt-4 block text-sm text-gray-500">
              {formatDate(article.created_at)}
            </time>
          </header>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.content_html }}
          />

          <footer className="mt-12 border-t border-gray-100 pt-6">
            <TagList keywords={[article.seedKeyword ?? '', ...article.keywords]} />
          </footer>
        </article>
      </div>
    </main>
  );
}
