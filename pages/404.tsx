import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404 – Flynn OConnell">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – You screwed up. 
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Or I screwed up. Tough to tell, but since I made this 404 request and I make the rules,
          you screwed up. Back to the drawing board.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}
