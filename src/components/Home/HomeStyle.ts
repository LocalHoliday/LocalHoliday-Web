import styled from '@emotion/styled'
import { media } from '@/styles/media'

export const Container = styled.section`
  opacity: 1;
  transform: none;

  width: 100vw;

  position: relative;
  background: linear-gradient(
    111.3deg,
    #f1f5ff 0.71%,
    #ccfff9 97.79%,
    #ccfff9 97.79%
  );
  ${media.large} {
    height: 35rem;
  }
  ${media.medium} {
    height: 30rem;
  }
  ${media.small} {
    height: 28rem;
  }
  ${media.mobile} {
    height: 24rem;
  }
`

export const SubContainer = styled.div`
  display: flex;

  align-items: center;
  gap: 160px;
  position: absolute;

  ${media.large} {
    flex-direction: row;
    padding-left: 8rem;
    padding-right: 8rem;
    img {
      padding-top: 5rem;
      width: 500px;
    }
  }
  ${media.medium} {
    flex-direction: row;
    padding-left: 4rem;
    padding-right: 4rem;

    img {
      padding-top: 2rem;
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
  align-items: flex-start;
  padding-top: 100px;

  gap: 24px;
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
      padding-top: 2rem;
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
  text-align: center;
  border: 1px solid var(--color-gray500);
  border-radius: 10px;
  background-color: transparent;
  font-weight: var(--font-R);
  ${media.large} {
    padding-top: 12px;
    font-size: var(--font-H4);
    width: 375px;
    height: 70px;
  }
  ${media.medium} {
    padding-top: 14px;
    font-size: var(--font-B1);
    width: 275px;
    height: 50px;
  }
  ${media.small} {
    padding-top: 10px;
    font-size: var(--font-B3);
    width: 150px;
    height: 30px;
  }
  ${media.mobile} {
    padding-top: 7px;
    font-size: 6px;
    width: 80px;
    height: 30px;
  }
`
