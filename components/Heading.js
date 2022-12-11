import NextHead from 'next/head';

export default function Heading({ title = '' }) {
  return (
    <NextHead>
      <title>
        Next
        {title ? ' | ' : ''}
        {title}
      </title>
    </NextHead>
  );
}
