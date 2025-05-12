import Link from "next/link";

type MyLinkProps = {
  route?: string;
  children: React.ReactNode;
  handelClick?: () => void;
};

/**
 * Renders a link or a button based on the provided route prop.
 *
 * @param {object} props - The component props.
 * @param {string} props.route - The route to navigate to when the link is clicked.
 * @param {ReactNode} props.children - The content to be rendered inside the link or button.
 * @param {Function} props.handelClick - The click event handler function.
 * @returns {JSX.Element} - The rendered link or button component.
 */
function MyLink({ route, children, handelClick }: MyLinkProps): JSX.Element {
  if (!route) {
    return (
      <button type="button" onClick={handelClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={route} scroll={false} onClick={handelClick}>
      {children}
    </Link>
  );
}

export default MyLink;
