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
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.40009 15.1911L0.808838 13.5998L6.40884 7.99984L0.808838 2.39984L2.40009 0.808594L8.00009 6.40859L13.6001 0.808594L15.1913 2.39984L9.59134 7.99984L15.1913 13.5998L13.6001 15.1911L8.00009 9.59109L2.40009 15.1911Z'
        fill={color}
      />
    </svg>
  )
}

export default SvgComponent
