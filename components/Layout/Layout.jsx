import Head from 'next/head';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: 'BYLT Basics - Premium Basics',
};

export default Layout;
