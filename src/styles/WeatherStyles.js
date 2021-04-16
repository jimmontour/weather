import styled from 'styled-components'

export const WeatherStyles = styled.div`
  h1 {
    font-size: 5rem;
  }
  .card {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background: var(--black);
    padding: 3rem 6rem;
    border-radius: 10px;
    box-shadow: var(--level-4);
  }
  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    /* Preserve aspet ratio */
    min-width: 100%;
    min-height: 100%;
  }
  .search-city {
    background: var(--purple);
    padding: 0.2rem;
    border-radius: 4px;
  }
  .city-temp {
    display: flex;
    justify-content: center;
    h4 {
      margin-right: 1rem;
    }
  }
`;
