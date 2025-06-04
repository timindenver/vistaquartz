import AdditionalItemsFootPedestal0 from 'shared/assets/images/mainSelection/additionalItems/footPedestal/0.png'
import AdditionalItemsFootPedestal1 from 'shared/assets/images/mainSelection/additionalItems/footPedestal/1.png'
import AdditionalItemsGrabBar0 from 'shared/assets/images/mainSelection/additionalItems/grabBar/0.png'
import AdditionalItemsGrabBar1 from 'shared/assets/images/mainSelection/additionalItems/grabBar/1.png'
import AdditionalItemsGrabBar2 from 'shared/assets/images/mainSelection/additionalItems/grabBar/2.png'
import AdditionalItemsGrabBar3 from 'shared/assets/images/mainSelection/additionalItems/grabBar/3.png'
import AdditionalItemsSeat0 from 'shared/assets/images/mainSelection/additionalItems/seat/0.png'
import AdditionalItemsSeat1 from 'shared/assets/images/mainSelection/additionalItems/seat/1.png'
import AdditionalItemsSeat2 from 'shared/assets/images/mainSelection/additionalItems/seat/2.png'
import HandShowerWand from 'shared/assets/images/mainSelection/fixtures/handShowerWand.png'
import Shelf from 'shared/assets/images/mainSelection/fixtures/shelf.png'
import AbsoluteWhiteNonSelected from 'shared/assets/images/mainSelection/wallColors/absoluteWhite/nonSelected.png'
import AbsoluteWhiteSelected from 'shared/assets/images/mainSelection/wallColors/absoluteWhite/selected.png'
import BiancoLasaNonSelected from 'shared/assets/images/mainSelection/wallColors/biancoLasa/nonSelected.png'
import BiancoLasaSelected from 'shared/assets/images/mainSelection/wallColors/biancoLasa/selected.png'
import BrushedOnyxNonSelected from 'shared/assets/images/mainSelection/wallColors/brushedOnyx/nonSelected.png'
import BrushedOnyxSelected from 'shared/assets/images/mainSelection/wallColors/brushedOnyx/selected.png'
import CalacattaNonSelected from 'shared/assets/images/mainSelection/wallColors/calacatta/nonSelected.png'
import CalacattaSelected from 'shared/assets/images/mainSelection/wallColors/calacatta/selected.png'
import DiamondCremeNonSelected from 'shared/assets/images/mainSelection/wallColors/diamondCreme/nonSelected.png'
import DiamondCremeSelected from 'shared/assets/images/mainSelection/wallColors/diamondCreme/selected.png'
import EarthNonSelected from 'shared/assets/images/mainSelection/wallColors/earth/nonSelected.png'
import EarthSelected from 'shared/assets/images/mainSelection/wallColors/earth/selected.png'
import GreyBlendNonSelected from 'shared/assets/images/mainSelection/wallColors/greyBlend/nonSelected.png'
import GreyBlendSelected from 'shared/assets/images/mainSelection/wallColors/greyBlend/selected.png'
import PaleClayNonSelected from 'shared/assets/images/mainSelection/wallColors/paleClay/nonSelected.png'
import PaleClaySelected from 'shared/assets/images/mainSelection/wallColors/paleClay/selected.png'
import PietraGreyNonSelected from 'shared/assets/images/mainSelection/wallColors/pietraGrey/nonSelected.png'
import PietraGreySelected from 'shared/assets/images/mainSelection/wallColors/pietraGrey/selected.png'
import SandstoneCremeNonSelected from 'shared/assets/images/mainSelection/wallColors/sandstoneCreme/nonSelected.png'
import SandstoneCremeSelected from 'shared/assets/images/mainSelection/wallColors/sandstoneCreme/selected.png'
import SilverStrataNonSelected from 'shared/assets/images/mainSelection/wallColors/silverStrata/nonSelected.png'
import SilverStrataSelected from 'shared/assets/images/mainSelection/wallColors/silverStrata/selected.png'
import StatuarioNonSelected from 'shared/assets/images/mainSelection/wallColors/statuario/nonSelected.png'
import StatuarioSelected from 'shared/assets/images/mainSelection/wallColors/statuario/selected.png'

export type DefaultWallColorOptionValues =
  | 'diamondCreme'
  | 'statuario'
  | 'pietraGrey'
  | 'calacatta'
  | 'paleClay'
  | 'earth'
  | 'silverStrata'
  | 'biancoLasa'
  | 'brushedOnyx'
  | 'absoluteWhite'
  | 'sandstoneCreme'
  | 'greyBlend'

export type DefaultWallColorOptions = {
  name: string
  value: DefaultWallColorOptionValues
  image: {
    selected: string
    nonSelected: string
  }
}[]

export const defaultWallColorOptions: DefaultWallColorOptions = [
  {
    name: 'Diamond Creme',
    value: 'diamondCreme',
    image: {
      selected: DiamondCremeSelected,
      nonSelected: DiamondCremeNonSelected,
    },
  },
  {
    name: 'Statuario',
    value: 'statuario',
    image: {
      selected: StatuarioSelected,
      nonSelected: StatuarioNonSelected,
    },
  },
  {
    name: 'Pietra Grey',
    value: 'pietraGrey',
    image: {
      selected: PietraGreySelected,
      nonSelected: PietraGreyNonSelected,
    },
  },
  {
    name: 'Calacatta',
    value: 'calacatta',
    image: {
      selected: CalacattaSelected,
      nonSelected: CalacattaNonSelected,
    },
  },
  {
    name: 'Pale Clay',
    value: 'paleClay',
    image: {
      selected: PaleClaySelected,
      nonSelected: PaleClayNonSelected,
    },
  },
  {
    name: 'Earth',
    value: 'earth',
    image: {
      selected: EarthSelected,
      nonSelected: EarthNonSelected,
    },
  },
  {
    name: 'Silver Strata',
    value: 'silverStrata',
    image: {
      selected: SilverStrataSelected,
      nonSelected: SilverStrataNonSelected,
    },
  },
  {
    name: 'Bianco Lasa',
    value: 'biancoLasa',
    image: {
      selected: BiancoLasaSelected,
      nonSelected: BiancoLasaNonSelected,
    },
  },
  {
    name: 'Brushed Onyx',
    value: 'brushedOnyx',
    image: {
      selected: BrushedOnyxSelected,
      nonSelected: BrushedOnyxNonSelected,
    },
  },
  {
    name: 'Absolute White',
    value: 'absoluteWhite',
    image: {
      selected: AbsoluteWhiteSelected,
      nonSelected: AbsoluteWhiteNonSelected,
    },
  },
  {
    name: 'Sandstone Creme',
    value: 'sandstoneCreme',
    image: {
      selected: SandstoneCremeSelected,
      nonSelected: SandstoneCremeNonSelected,
    },
  },
  {
    name: 'Grey Blend',
    value: 'greyBlend',
    image: {
      selected: GreyBlendSelected,
      nonSelected: GreyBlendNonSelected,
    },
  },
]

export type DefaultFixtureOptionValues =
  | 'matteBlack'
  | 'brushedGold'
  | 'brushedNickel'
  | 'polishedChrome'

export type DefaultFixtureOption = {
  value: DefaultFixtureOptionValues
  name: string
  hex: string
  options?: {
    value: 'handShowerWand' | 'shelf'
    title: string
    image: string
  }[]
}

export const defaultFixtureOptions: DefaultFixtureOption[] = [
  {
    value: 'matteBlack',
    name: 'Matte Black',
    hex: '#3C3E42',
    options: [
      {
        value: 'handShowerWand',
        title: 'Add hand shower wand',
        image: HandShowerWand,
      },
      {
        value: 'shelf',
        title: 'Add shelf',
        image: Shelf,
      },
    ],
  },
  {
    value: 'brushedGold',
    name: 'Brushed Gold',
    hex: '#D1BF9C',
    options: [
      {
        value: 'handShowerWand',
        title: 'Add hand shower wand',
        image: HandShowerWand,
      },
      {
        value: 'shelf',
        title: 'Add shelf',
        image: Shelf,
      },
    ],
  },
  {
    value: 'brushedNickel',
    name: 'Brushed Nickel',
    hex: '#ACA79B',
    options: [
      {
        value: 'handShowerWand',
        title: 'Add hand shower wand',
        image: HandShowerWand,
      },
      {
        value: 'shelf',
        title: 'Add shelf',
        image: Shelf,
      },
    ],
  },
  {
    value: 'polishedChrome',
    name: 'Polished Chrome',
    hex: '#D5D5D5',
    options: [
      {
        value: 'handShowerWand',
        title: 'Add hand shower wand',
        image: HandShowerWand,
      },
      {
        value: 'shelf',
        title: 'Add shelf',
        image: Shelf,
      },
    ],
  },
]

export type DefaultAdditionalOptionValues = 'seat' | 'grabBar' | 'footPedestal'

export type DefaultAdditionalOptions = {
  value: DefaultAdditionalOptionValues
  title: {
    mobile: string
    desktop: string
  }
  images: {
    gap: {
      mobile: number
      desktop: number
    }
    maxWidth: {
      mobile: number
      desktop: number
    }
    src: string[]
  }
}[]

const defaultAdditionalOptions: DefaultAdditionalOptions = [
  {
    value: 'seat',
    title: {
      desktop: 'Add seat',
      mobile: 'Seat',
    },
    images: {
      gap: {
        mobile: 8,
        desktop: 22,
      },
      maxWidth: {
        mobile: 46,
        desktop: 81,
      },
      src: [AdditionalItemsSeat0, AdditionalItemsSeat1, AdditionalItemsSeat2],
    },
  },
  {
    value: 'grabBar',
    title: {
      desktop: 'Add grab bar',
      mobile: 'Grab bar',
    },
    images: {
      gap: {
        mobile: 0,
        desktop: 11,
      },
      maxWidth: {
        mobile: 55,
        desktop: 96,
      },
      src: [
        AdditionalItemsGrabBar0,
        AdditionalItemsGrabBar1,
        AdditionalItemsGrabBar2,
        AdditionalItemsGrabBar3,
      ],
    },
  },
  {
    value: 'footPedestal',
    title: {
      desktop: 'Add foot pedestal',
      mobile: 'Foot pedestal',
    },
    images: {
      gap: {
        mobile: 0,
        desktop: 1,
      },
      maxWidth: {
        mobile: 60,
        desktop: 106,
      },
      src: [AdditionalItemsFootPedestal0, AdditionalItemsFootPedestal1],
    },
  },
]

export const MAIN_LAYOUT_DETAILS = {
  showerStall: {
    wallColorOptions: defaultWallColorOptions,
    fixtureOptions: defaultFixtureOptions,
    additionalOptions: defaultAdditionalOptions,
  },
  alcoveShower: {
    wallColorOptions: defaultWallColorOptions,
    fixtureOptions: defaultFixtureOptions,
    additionalOptions: defaultAdditionalOptions,
  },
  tubShowerCombo: {
    wallColorOptions: defaultWallColorOptions,
    fixtureOptions: defaultFixtureOptions,
    additionalOptions: defaultAdditionalOptions,
  },
}
