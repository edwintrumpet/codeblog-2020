import * as React from 'react';
import PropTypes from 'prop-types';

export default function Logo(props) {
  const { size, color } = props;
  return (
    <svg
      data-name="Componente 2 \u2013 3"
      width={size}
      height={size}
      viewBox="0 0 168 168"
      {...props}
    >
      <path data-name="Rect\xE1ngulo 41" fill="none" d="M168 0v168H0V0z" />
      <g data-name="Trazado 4" fill="#fff">
        <path d="M84 92z" />
        <path d="M84 76v16-16z" fill="#707070" />
      </g>
      <g data-name="Trazado 8" fill="#fff">
        <path d="M84 92z" />
        <path d="M84 76v16-16z" fill="#707070" />
      </g>
      <g
        data-name="Grupo 9"
        transform="translate(-761.431 -219)"
        fill={color}
      >
        <circle
          data-name="Elipse 13"
          cx={4}
          cy={4}
          r={4}
          transform="translate(825 289)"
        />
        <circle
          data-name="Elipse 14"
          cx={4}
          cy={4}
          r={4}
          transform="translate(857 289)"
        />
        <g data-name="Grupo 7" transform="translate(41 -12.431)">
          <rect
            data-name="Rect\xE1ngulo 36"
            width={64}
            height={16}
            rx={8}
            transform="rotate(-45 747.782 -727.487)"
          />
          <rect
            data-name="Rect\xE1ngulo 37"
            width={64}
            height={16}
            rx={8}
            transform="rotate(45 4.892 1051.202)"
          />
        </g>
        <g data-name="Grupo 8" transform="translate(49 -12.431)">
          <rect
            data-name="Rect\xE1ngulo 38"
            width={64}
            height={16}
            rx={8}
            transform="rotate(-135 495.567 -13.718)"
          />
          <rect
            data-name="Rect\xE1ngulo 39"
            width={64}
            height={16}
            rx={8}
            transform="rotate(135 368.107 337.434)"
          />
        </g>
        <rect
          data-name="Rect\xE1ngulo 47"
          width={24}
          height={8}
          rx={4}
          transform="rotate(-45 805.84 -846.192)"
        />
      </g>
    </svg>
  );
}

Logo.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

Logo.defaultProps = {
  size: 60,
  color: '#cecdcf',
};
