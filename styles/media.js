import { css } from 'styled-components';

const sizes = {
  desktopXL: 1440,
  desktop: 1000,
  tablet: 768,
  phablet: 600,
  phoneXL: 480,
  phone: 400,
  tinyPhone: 330,
};


export const media = Object.keys(sizes).reduce((accumulator, label) => {

  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;