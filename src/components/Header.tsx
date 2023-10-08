import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <Image src="/lit.svg" alt="Lit logo" width={32} height={32}></Image>
      <a
        href="https://developer.litprotocol.com/?ref=demo.getlit.dev"
        target="_blank"
        rel="noopener nofollow"
        className="lit-cta"
      >
        Build on Lit
      </a>
    </header>
  );
};

export default Header;