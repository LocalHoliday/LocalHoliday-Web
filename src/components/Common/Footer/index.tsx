import styled from '@emotion/styled'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <Spacing />
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

const Spacing = styled.div`
  margin: 10rem;
`

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
`

const FooterTerms = styled.div`
  font-family: var(--font-primary);
  font-weight: var(--font-M);
  font-size: var(--font-B4);
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    padding-top: 2rem;
    padding-right: 5rem;
    padding-left: 5rem;
  }
`
