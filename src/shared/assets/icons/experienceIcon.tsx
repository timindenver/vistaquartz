import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = 73,
  height = 10,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20 89.15 160 21.7"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      aria-hidden="true"
      aria-label=""
      {...props}
    >
      <g>
        <path
          d="M63.95 107.75 71.7 100l-7.75-7.75L56.2 100l7.75 7.75zm0 3.1L53.1 100l10.85-10.85L74.79 100l-10.84 10.85z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M30.85 107.75 38.6 100l-7.75-7.75L23.1 100l7.75 7.75zm0 3.1L20 100l10.85-10.85L41.7 100l-10.85 10.85z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="m134.08 107.75 7.75-7.75-7.75-7.75-7.75 7.75 7.75 7.75zm0 3.1L123.23 100l10.85-10.85L144.93 100l-10.85 10.85z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="m169.15 107.75 7.75-7.75-7.75-7.75-7.75 7.75 7.75 7.75zm0 3.1L158.3 100l10.85-10.85L180 100l-10.85 10.85z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="m99.01 107.75 7.75-7.75-7.75-7.75-7.74 7.75 7.74 7.75zm0 3.1L88.17 100l10.85-10.85L109.86 100l-10.85 10.85z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
