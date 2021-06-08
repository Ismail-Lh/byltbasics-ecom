import Link from 'next/link';

const MyLink = ({ route, children, handelClick, handelUpdate }) => {
  if (!route) return <button onClick={handelClick}>{children}</button>;

  return (
    <Link href={route} onClick={handelUpdate && handelUpdate}>
      <a>{children}</a>
    </Link>
  );
};

export default MyLink;
