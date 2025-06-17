import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = 26,
  height = 26,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20 19.98 160 160.04"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      {...props}
    >
      <g>
        <path
          d="m51.11 126.69-22.22 22.22 22.22 22.22 22.22-22.22-22.22-22.22zm0-8.89 31.11 31.11-31.11 31.11L20 148.91l31.11-31.11z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M99.98 77.78 77.75 100l22.22 22.22L122.2 100 99.98 77.78zm0-8.89L131.09 100l-31.11 31.11L68.86 100l31.12-31.11z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="m148.89 28.86-22.22 22.22 22.22 22.22 22.22-22.22-22.22-22.22zm0-8.88L180 51.09 148.89 82.2l-31.11-31.11 31.11-31.11z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
