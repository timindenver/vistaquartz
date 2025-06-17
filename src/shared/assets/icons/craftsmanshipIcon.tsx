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
      viewBox="20 20 160 160"
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
          d="M172 28H28v144h144V28zm8-8v160H20V20h160z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
        <path
          d="M68 132H28v40h40v-40zm8-8v56H20v-56h56z"
          fill={color}
          clipRule="evenodd"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
