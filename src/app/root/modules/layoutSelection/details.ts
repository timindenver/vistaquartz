import Image_layout_alcoveShower from 'shared/assets/images/layoutSelection/step0/alcoveShower.svg'
import Image_layout_showerStall from 'shared/assets/images/layoutSelection/step0/showerStall.svg'
import Image_layout_tubShowerCombo from 'shared/assets/images/layoutSelection/step0/tubShowerCombo.svg'
import Image_handling_alcoveShower_left from 'shared/assets/images/layoutSelection/step1/alcoveShower/left.svg'
import Image_handling_alcoveShower_right from 'shared/assets/images/layoutSelection/step1/alcoveShower/right.svg'
import Image_handling_showerStall_left from 'shared/assets/images/layoutSelection/step1/showerStall/left.svg'
import Image_handling_showerStall_right from 'shared/assets/images/layoutSelection/step1/showerStall/right.svg'
import Image_handling_tubShowerCombo_left from 'shared/assets/images/layoutSelection/step1/tubShowerCombo/left.svg'
import Image_handling_tubShowerCombo_right from 'shared/assets/images/layoutSelection/step1/tubShowerCombo/right.svg'

export type LAYOUT_DETAIL_TYPE = {
  title: string
  description: string
  selection: {
    name: string
    options: {
      match: {
        selection: null | string
        option: null | string
      }
      options: {
        name: string
        value: string
        img: string
      }[]
    }[]
  }
}

export const LAYOUT_DETAILS: Record<number, LAYOUT_DETAIL_TYPE> = {
  0: {
    title: 'Step 1: Select Your Layout',
    description: 'Choose the configuration closest to your bathroom',
    selection: {
      name: 'layout',
      options: [
        {
          match: {
            selection: null,
            option: null,
          },
          options: [
            {
              name: 'Shower Stall',
              value: 'showerStall',
              img: Image_layout_showerStall,
            },
            {
              name: 'Alcove Shower',
              value: 'alcoveShower',
              img: Image_layout_alcoveShower,
            },
            {
              name: 'Tub/Shower Combo',
              value: 'tubShowerCombo',
              img: Image_layout_tubShowerCombo,
            },
          ],
        },
      ],
    },
  },
  1: {
    title: 'Step 2: Select Handing',
    description:
      'Is your plumbing on the left or right side as you look at your bath or shower?',
    selection: {
      name: 'handling',
      options: [
        {
          match: {
            selection: 'layout',
            option: 'showerStall',
          },
          options: [
            {
              name: 'Left Hand',
              value: 'left',
              img: Image_handling_showerStall_left,
            },
            {
              name: 'Right Hand',
              value: 'right',
              img: Image_handling_showerStall_right,
            },
          ],
        },
        {
          match: {
            selection: 'layout',
            option: 'alcoveShower',
          },
          options: [
            {
              name: 'Left Hand',
              value: 'left',
              img: Image_handling_alcoveShower_left,
            },
            {
              name: 'Right Hand',
              value: 'right',
              img: Image_handling_alcoveShower_right,
            },
          ],
        },
        {
          match: {
            selection: 'layout',
            option: 'tubShowerCombo',
          },
          options: [
            {
              name: 'Left Hand',
              value: 'left',
              img: Image_handling_tubShowerCombo_left,
            },
            {
              name: 'Right Hand',
              value: 'right',
              img: Image_handling_tubShowerCombo_right,
            },
          ],
        },
      ],
    },
  },
}
