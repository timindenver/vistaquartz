import {
  Checkbox,
  type CheckboxControlProps,
  type CheckboxLabelProps,
  type CheckboxRootProps,
} from '@chakra-ui/react'
import classNames from 'classnames'

import './styles.scss'

type CheckboxProps = {
  root?: CheckboxRootProps
  control?: CheckboxControlProps
  label?: CheckboxLabelProps & {
    value?: string
  }
  custom?: {
    shape: 'Round' | 'Square'
  }
}

export const CustomizedCheckbox = (props: CheckboxProps) => {
  return (
    <Checkbox.Root
      {...props.root}
      className={classNames(
        props?.custom?.shape ? `customCheckbox${props?.custom?.shape}` : '',
        'customCheckbox'
      )}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control {...props.control} />
      <Checkbox.Label textStyle='smallText' {...props.label}>
        {props.label?.value || ''}
      </Checkbox.Label>
    </Checkbox.Root>
  )
}
