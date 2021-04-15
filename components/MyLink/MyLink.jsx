import Link from 'next/link';

const MyLink = ({ route, children }) => {
  return (
    <Link href={route}>
      <a>{children}</a>
    </Link>
  );
};

export default MyLink;
