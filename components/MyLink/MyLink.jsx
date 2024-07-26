import Link from "next/link";

const MyLink = ({ route, children, handelClick }) => {
  if (!route)
    return (
      <button type="button" onClick={handelClick}>
        {children}
      </button>
    );

  return (
    <Link href={route} scroll={false} onClick={handelClick}>
      {children}
    </Link>
  );
};

export default MyLink;
