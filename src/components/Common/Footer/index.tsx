import styled from '@emotion/styled'
import Link from 'next/link'
import { media } from '@/styles/media'

export default function Footer() {
  return (
    <>
      <FooterStyle>
        <FooterTerms>
          <ul>
            <li>
              <Link href="/introduction">소개</Link>
            </li>
            <li>
              <Link href="/terms">이용약관</Link>
            </li>
            <li>
              <Link href="/privacy">개인정보처리방침</Link>
            </li>
          </ul>
        </FooterTerms>
        <FooterCopyright>
          © {new Date().getFullYear()} LocalHoliday All Rights Reserved
        </FooterCopyright>
      </FooterStyle>
    </>
  )
}

const FooterStyle = styled.div`
  border-top: 1px solid #eee;
  text-align: center;
`

const FooterCopyright = styled.div`
  //text-align: center;
  font-family: var(--font-primary);
  font-weight: var(--font-T);
  font-size: var(--font-B4);
  padding: 2rem;
  background-color: #fff;
  ${media.large} {
    font-size: var(--font-B3);
  }

  ${media.medium} {
    font-size: 7px;
  }
  ${media.small} {
    font-size: 5px;
  }
  ${media.mobile} {
    font-size: 8px;
  }
`

const FooterTerms = styled.div`
  a {
    text-decoration: none;
    color: var(--color-black);
  }
  font-family: var(--font-primary);
  font-weight: var(--font-M);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  ${media.large} {
    font-size: var(--font-B3);
    li {
      padding-top: 2rem;
      padding-right: 5rem;
      padding-left: 5rem;
    }
  }

  ${media.medium} {
    font-size: 7px;
    li {
      padding-top: 2rem;
      padding-right: 3rem;
      padding-left: 3rem;
    }
  }
  ${media.small} {
    font-size: 5px;
    li {
      padding-top: 2rem;
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }
  ${media.mobile} {
    font-size: 5px;
    li {
      padding-top: 2rem;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
`
