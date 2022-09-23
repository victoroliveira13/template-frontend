const base = {
    'gray.100': '#FFFFFF',
    'gray.150': '#F5F5FA',
    'gray.200': '#F0F0F5',
    'gray.250': '#E9E9F0',
    'gray.300': '#E1E1E8',
    'gray.350': '#DADAE0',
    'gray.400': '#A8A8B3',
    'gray.450': '#A0A0B3',
    'gray.500': '#737380',
    'gray.550': '#6C6C80',
    'gray.600': '#41414D',
    'gray.650': '#3C3C42',
    'gray.700': '#323238',
    'gray.750': '#29292E',
    'gray.800': '#202024',
    'gray.850': '#121214',
    'gray.900': '#09090A',
    'orange.100': '#FFF4E9',
    'orange.150': '#FFEAD2',
    'orange.200': '#FEDFBC',
    'orange.250': '#FED5A5',
    'orange.300': '#FECA8F',
    'orange.350': '#FEBF79',
    'orange.400': '#FEB562',
    'orange.450': '#FDA541',
    'orange.500': '#FD951F',
    'orange.550': '#DA811D',
    'orange.600': '#B76E1C',
    'orange.650': '#9F611B',
    'orange.700': '#88541A',
    'orange.750': '#704619',
    'orange.800': '#593918',
    'orange.850': '#412C17',
    'orange.900': '#2A1F15',
    'gold.100': '#FBF7ED',
    'gold.150': '#F7EEDC',
    'gold.200': '#F3E6CA',
    'gold.250': '#EFDEB8',
    'gold.300': '#EBD6A6',
    'gold.350': '#E6CD95',
    'gold.400': '#E2C583',
    'gold.450': '#DCB869',
    'gold.500': '#D6AC4E',
    'gold.550': '#B99545',
    'gold.600': '#9B7E3D',
    'gold.650': '#886E37',
    'gold.700': '#745F31',
    'gold.750': '#60502B',
    'gold.800': '#4D4026',
    'gold.850': '#393120',
    'gold.900': '#26211A',
    'yellow.100': '#FEFCE8',
    'yellow.150': '#FDF9D2',
    'yellow.200': '#FDF5BB',
    'yellow.250': '#FCF2A5',
    'yellow.300': '#FBEF8E',
    'yellow.350': '#FAEC78',
    'yellow.400': '#F9E961',
    'yellow.450': '#F8E440',
    'yellow.500': '#F7DF1E',
    'yellow.550': '#D5C01D',
    'yellow.600': '#B2A21B',
    'yellow.650': '#9B8D1A',
    'yellow.700': '#857919',
    'yellow.750': '#6E6418',
    'yellow.800': '#575017',
    'yellow.850': '#403B16',
    'yellow.900': '#292715',
    'lime.100': '#F1FBE6',
    'lime.150': '#E4F6CD',
    'lime.200': '#D7F2B4',
    'lime.250': '#C9ED9B',
    'lime.300': '#BBE981',
    'lime.350': '#AEE568',
    'lime.400': '#A1E04F',
    'lime.450': '#8CDA2A',
    'lime.500': '#78D304',
    'lime.550': '#69B606',
    'lime.600': '#599909',
    'lime.650': '#4F860B',
    'lime.700': '#45730C',
    'lime.750': '#3B5F0E',
    'lime.800': '#314C0F',
    'lime.850': '#263911',
    'lime.900': '#1C2513',
    'green.100': '#E6FBEF',
    'green.150': '#CDF6DF',
    'green.200': '#B4F2D0',
    'green.250': '#9BEDC0',
    'green.300': '#81E9B0',
    'green.350': '#68E5A0',
    'green.400': '#4FE090',
    'green.450': '#2ADA79',
    'green.500': '#04D361',
    'green.550': '#06B656',
    'green.600': '#08994A',
    'green.650': '#0A8642',
    'green.700': '#0B733B',
    'green.750': '#0C5F33',
    'green.800': '#0E4C2B',
    'green.850': '#0F3924',
    'green.900': '#11251C',
    'cyan.100': '#EDF8FB',
    'cyan.150': '#DBF2F7',
    'cyan.200': '#CAEBF3',
    'cyan.250': '#B8E4EF',
    'cyan.300': '#A6DEEB',
    'cyan.350': '#94D7E6',
    'cyan.400': '#82D0E2',
    'cyan.450': '#68C6DC',
    'cyan.500': '#4DBCD6',
    'cyan.550': '#44A3B9',
    'cyan.600': '#3B899C',
    'cyan.650': '#357889',
    'cyan.700': '#306775',
    'cyan.750': '#2A5662',
    'cyan.800': '#24454E',
    'cyan.850': '#1E343B',
    'cyan.900': '#182328',
    'blue.100': '#EDEFFF',
    'blue.150': '#DAE0FF',
    'blue.200': '#C8D0FF',
    'blue.250': '#B5C1FF',
    'blue.300': '#A3B1FF',
    'blue.350': '#91A1FF',
    'blue.400': '#7E92FF',
    'blue.450': '#637AFF',
    'blue.500': '#4763FF',
    'blue.550': '#3F57DC',
    'blue.600': '#374BB9',
    'blue.650': '#3243A1',
    'blue.700': '#2D3B8A',
    'blue.750': '#273272',
    'blue.800': '#222A5B',
    'blue.850': '#1D2243',
    'blue.900': '#171A2C',
    'purple.100': '#F3EEFC',
    'purple.150': '#E6DDFA',
    'purple.200': '#D9CDF7',
    'purple.250': '#CDBCF5',
    'purple.300': '#C0ABF2',
    'purple.350': '#B49AEF',
    'purple.400': '#A789ED',
    'purple.450': '#9570E9',
    'purple.500': '#8257E6',
    'purple.550': '#714DC6',
    'purple.600': '#6042A6',
    'purple.650': '#553B92',
    'purple.700': '#4A357D',
    'purple.750': '#3F2E68',
    'purple.800': '#342753',
    'purple.850': '#28203E',
    'purple.900': '#1D1929',
    'pink.100': '#FDEEF8',
    'pink.150': '#FBDCF2',
    'pink.200': '#F9CBEB',
    'pink.250': '#F7B9E5',
    'pink.300': '#F5A8DE',
    'pink.350': '#F397D7',
    'pink.400': '#F185D1',
    'pink.450': '#EE6BC7',
    'pink.500': '#EB51BD',
    'pink.550': '#CA48A4',
    'pink.600': '#AA3E8A',
    'pink.650': '#94387A',
    'pink.700': '#7F3269',
    'pink.750': '#692B58',
    'pink.800': '#532547',
    'pink.850': '#3D1F36',
    'pink.900': '#281825',
    'red.100': '#FDECEF',
    'red.150': '#FAD9DE',
    'red.200': '#F8C5CE',
    'red.250': '#F6B2BD',
    'red.300': '#F49FAD',
    'red.350': '#F18C9D',
    'red.400': '#EF798C',
    'red.450': '#EB5C74',
    'red.500': '#E83F5B',
    'red.550': '#C83850',
    'red.600': '#A83246',
    'red.650': '#922D3F',
    'red.700': '#7D2938',
    'red.750': '#682431',
    'red.800': '#52202A',
    'red.850': '#3D1B23',
    'red.900': '#27171B',
    'whiteAlpha.50': 'rgba(255, 255, 255, 0.04)',
    'whiteAlpha.100': 'rgba(255, 255, 255, 0.06)',
    'whiteAlpha.200': 'rgba(255, 255, 255, 0.08)',
    'whiteAlpha.300': 'rgba(255, 255, 255, 0.16)',
    'whiteAlpha.400': 'rgba(255, 255, 255, 0.24)',
    'whiteAlpha.500': 'rgba(255, 255, 255, 0.36)',
    'whiteAlpha.600': 'rgba(255, 255, 255, 0.48)',
    'whiteAlpha.700': 'rgba(255, 255, 255, 0.64)',
    'whiteAlpha.800': 'rgba(255, 255, 255, 0.80)',
    'whiteAlpha.900': 'rgba(255, 255, 255, 0.92)',
    'blackAlpha.50': 'rgba(0, 0, 0, 0.04)',
    'blackAlpha.100': 'rgba(0, 0, 0, 0.06)',
    'blackAlpha.200': 'rgba(0, 0, 0, 0.08)',
    'blackAlpha.300': 'rgba(0, 0, 0, 0.16)',
    'blackAlpha.400': 'rgba(0, 0, 0, 0.24)',
    'blackAlpha.500': 'rgba(0, 0, 0, 0.36)',
    'blackAlpha.600': 'rgba(0, 0, 0, 0.48)',
    'blackAlpha.700': 'rgba(0, 0, 0, 0.64)',
    'blackAlpha.800': 'rgba(0, 0, 0, 0.80)',
    'blackAlpha.900': 'rgba(0, 0, 0, 0.92)'
}

const colors = {
    'background': base['gray.900'],
    'rocketseat-light': base['purple.400'],
    'rocketseat-mid': base['purple.500'],
    'rocketseat-dark': '#633BBC',
    'shape-primary': base['gray.800'],
    'shape-secondary': base['gray.700'],
    'shape-tertiary': base['gray.600'],
    'placeholder': base['gray.400'],
    'text-support': base['gray.300'],
    'text-base': base['gray.200'],
    'text-title': base['gray.100'],
    'success-base': base['green.500'],
    'success-light': '#1B873F',
    'danger-base': '#CC2937',
    'danger-light': '#F75A68',
    'warning-base': '#EB8A1D',
    'warning-light': '#FBA94C'
}

const opacitys = {
    'opacity-default': '100%',
    'opacity-semiOpaque': '90%',
    'opacity-intense': '75%',
    'opacity-medium': '50%',
    'opacity-light': '25%',
    'opacity-semiTransparent': '10%',
}

export { colors, opacitys }
