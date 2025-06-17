import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = 20,
  height = 20,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      viewBox="20.01 20 159.97 160"
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
          d="m148 84.08-32-31.99 31.99-32 31.99 32L148 84.08zm-27.89-31.99L148 79.97l27.88-27.88L148 24.2l-27.89 27.89z"
          fill={color}
        />
        <path
          d="M52.02 83.99 20.02 52l32-32 31.99 32-31.99 31.99zM24.14 52l27.88 27.88L79.9 52 52.02 24.11 24.14 52z"
          fill={color}
        />
        <path
          d="m147.98 180-31.99-31.99 31.99-32 31.99 32L147.98 180zm-27.88-31.99 27.88 27.88 27.88-27.88-27.88-27.88-27.88 27.88z"
          fill={color}
        />
        <path
          d="m52 180-31.99-31.99 31.99-32 31.99 32L52 180zm-27.88-31.99L52 175.89l27.88-27.88L52 120.12l-27.88 27.89z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default SvgComponent
