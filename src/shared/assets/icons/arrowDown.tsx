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
      viewBox='0 0 22 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M21.1913 1.965L11.0001 12.1562L0.808837 1.965L2.77509 -0.00125035L11.0001 8.22375L19.2251 -0.00125107L21.1913 1.965Z'
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
