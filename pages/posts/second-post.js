import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Second ... Post</h1>
      <h2>
        <Link href="/posts/first-post">
          <a>Back to First</a>
        </Link>
      </h2>
    </>
  );
}