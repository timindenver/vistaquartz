import { type SvgIconType, svgIconDefaultProps } from './_props'

const SvgComponent = ({
  width = svgIconDefaultProps.width,
  height = svgIconDefaultProps.height,
  color = svgIconDefaultProps.color,
  ...props
}: SvgIconType) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox='0 0 13 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.535 21.1913L0.34375 11.0001L10.535 0.808838L12.5013 2.77509L4.27625 11.0001L12.5013 19.2251L10.535 21.1913Z'
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
