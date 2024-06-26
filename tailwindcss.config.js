tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'azo-sans': [
          'azo-sans-web'
        ],
        'azo-uber': [
          'azo-sans-uber'
        ],
      },
      colors: {
        // Based on Bauhaus & Constructivism influences.
        bauhausRed: {
          DEFAULT: '#DD4B39',
          dark: '#B13A2A',
          light: '#E76C5A',
        },
        bauhausYellow: {
          DEFAULT: '#F2CF00',
          dark: '#CCA812',
          light: '#FFD217',
        },
        bauhausBlue: {
          DEFAULT: '#0066CC',
          dark: '#004C99',
          light: '#0080FF',
          deep: '#374152',
        },

        // Based on International Typographic Style influences.
        itsNeutral: {
          DEFAULT: '#E3E2D2',
          dark: '#E0E0E0',
          light: '#ECEADF',
        },
        itsAccent: {
          DEFAULT: '#228B22', // A green inspired by the ITS often usage of green as an accent
          dark: '#006400',
          light: '#32CD32',
        },
        openAI: {
          green: '#a9fe97',
          peach: '#ca8858',
          purple: '#400040',
          lilac: '#aec2ff'
        }
      }
    }
  }
}
