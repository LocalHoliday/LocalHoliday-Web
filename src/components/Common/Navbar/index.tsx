import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <Logo>
          <Link href="/">
            <Image
              src="../assets/img/logo.svg"
              width={200}
              height={180}
              alt="nav"
            ></Image>
          </Link>
        </Logo>
        <NavbarLinks>
          <ul>
            <li>
              <Link href="/recommend">추천</Link>
            </li>
            <li>
              <Link href="/search">로컬 홀리데이 찾기</Link>
            </li>
            <li>
              <Link href="/my">나의 로컬 홀리데이</Link>
            </li>
          </ul>
        </NavbarLinks>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: #fff;
  //box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  padding: 0 100px;
  font-weight: var(--font-T);
  font-family: var(--font-primary);
  margin-left: var(--spacing-nav);
  margin-right: var(--spacing-nav);
`

const Logo = styled.div``

const NavbarLinks = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 7rem;
  }

  a {
    font-size: var(--font-H5);
    color: var(--color-black);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-primary);
    font-weight: var(--font-M);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
