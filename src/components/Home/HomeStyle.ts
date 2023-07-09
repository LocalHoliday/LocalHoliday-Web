import styled from '@emotion/styled'
import { media } from '@/styles/media'

export const SubContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  align-items: center;
  gap: 160px;
  position: absolute;

  ${media.large} {
    flex-direction: row;
    padding-left: 8rem;
    padding-right: 8rem;
    img {
      padding-top: 8rem;
      width: 500px;
    }
  }
  ${media.medium} {
    flex-direction: row;
    padding-left: 4rem;
    padding-right: 4rem;

    img {
      padding-top: 4rem;
      width: 400px;
      height: 350px;
    }
  }
  ${media.small} {
    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;

    img {
      padding-top: 2rem;
      width: 300px;
      height: 300px;
    }
  }
  ${media.mobile} {
    flex-direction: column;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    img {
      padding-top: 1rem;

      width: 250px;
      height: 200px;
    }
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
  text-align: center;

  justify-content: center;
  align-content: center;

  h1 {
    font-family: var(--font-primary);
    font-weight: var(--font-SB);
  }
  h3 {
    font-family: var(--font-primary);
    font-weight: var(--font-M);
    color: var(--color-gray500);
  }
  ${media.large} {
    h1 {
      font-size: var(--font-H2);
    }
    h3 {
      padding-top: 50px;
      font-size: var(--font-H3);
    }

    img {
      padding-top: 1rem;
      width: 300px;
    }
  }

  ${media.medium} {
    h1 {
      font-size: var(--font-H3);
    }
    h3 {
      padding-top: 30px;
      font-size: var(--font-H4);
    }

    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;
    img {
      width: 250px;
    }
  }
  ${media.small} {
    h1 {
      font-size: var(--font-H4);
    }
    h3 {
      font-size: var(--font-B2);
    }
    flex-direction: row;
    padding-left: 2rem;
    padding-right: 2rem;

    img {
      padding-top: 2rem;
      width: 200px;
    }
  }
  ${media.mobile} {
    h1 {
      font-size: var(--font-B2);
    }
    h3 {
      font-size: 5px;
    }
    flex-direction: column;

    padding-left: 0.5rem;
    padding-right: 0.5rem;

    img {
      padding-top: 1rem;

      width: 100px;
    }
  }
`
export const Button = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid var(--color-gray500);
  border-radius: 10px;
  background-color: transparent;
  font-weight: var(--font-R);
  ${media.large} {
    font-size: var(--font-H4);
    width: 375px;
    height: 70px;
  }
  ${media.medium} {
    font-size: var(--font-B1);
    width: 275px;
    height: 50px;
  }
  ${media.small} {
    font-size: var(--font-B3);
    width: 150px;
    height: 30px;
  }
  ${media.mobile} {
    font-size: 6px;
    width: 80px;
    height: 30px;
  }
`
