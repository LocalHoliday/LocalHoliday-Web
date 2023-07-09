import { Navbar } from 'react-bootstrap'
import styled from '@emotion/styled'
import NavL from 'react-bootstrap/Nav'
import Link from 'next/link'
import Image from 'next/image'
import { media } from '@/styles/media'

export default function Nav() {
  return (
    <NavContainer>
      <Navbar expand="lg">
        <Navbar.Brand>
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavL className="mr-auto">
            <NavbarLinks>
              <Link href="/recommend">추천</Link>
              <Link href="/search">로컬홀리데이 찾기</Link>
              <Link href="/my">나의 로컬홀리데이</Link>
              <Link href="/login">로그인</Link>
            </NavbarLinks>
          </NavL>
        </Navbar.Collapse>
      </Navbar>
    </NavContainer>
  )
}
const NavContainer = styled.nav`
  font-weight: var(--font-T);
  font-family: var(--font-primary);
  margin-left: var(--spacing-nav);
  margin-right: var(--spacing-nav);
  font-size: var(--font-H3);
  text-align: center;
  ${media.large} {
    margin-left: var(--spacing-navL);
    margin-right: var(--spacing-navL);
  }

  ${media.medium} {
    margin-left: var(--spacing-navM);
    margin-right: var(--spacing-navM);
  }
  ${media.small} {
    margin-left: var(--spacing-navS);
    margin-right: var(--spacing-navS);
  }
  ${media.mobile} {
    margin-left: var(--spacing-navMB);
    margin-right: var(--spacing-navMB);
  }
`
const Logo = styled.div`
  ${media.large} {
    img {
      width: 400px;
    }
  }

  ${media.medium} {
    display: flex;

    img {
      width: 300px;
    }
  }
  ${media.small} {
    img {
      width: 200px;
    }
  }
  ${media.mobile} {
    img {
      width: 100px;
    }
  }
`

const NavbarLinks = styled.div`
  a {
    margin-left: 3rem;
    color: var(--color-black);
    text-decoration: none;
    font-size: var(--font-H4);
  }

  a:hover {
    color: var(--color-primary);
    font-weight: var(--font-M);
  }

  ${media.large} {
    a {
      font-size: var(--font-H5);
    }
  }

  ${media.medium} {
    display: flex;

    a {
      font-size: var(--font-B1);
    }
  }
  ${media.small} {
    flex-direction: column;
    a {
      padding: 10px;
      font-size: var(--font-B3);
    }
  }
  ${media.mobile} {
    flex-direction: column;
    a {
      font-size: 3px;
    }
  }
`