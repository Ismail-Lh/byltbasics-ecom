import Link from 'next/link';

const MyLink = ({ route, children, handelClick }) => {
  if (!route) return <button onClick={handelClick}>{children}</button>;

  return (
    <Link href={route}>
      <a>{children}</a>
    </Link>
  );
};

export default MyLink;
