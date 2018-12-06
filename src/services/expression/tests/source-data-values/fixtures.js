export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      varCount: 2,
      position: 0
    },
    expected: [false, false]
  },
  {
    index: 1,
    enabled: true,
    props: { 
      varCount: 2,
      position: 1
    },
    expected: [false, true]
  },
  {
    index: 2,
    enabled: true,
    props: { 
      varCount: 2,
      position: 2
    },
    expected: [true, false]
  },
  {
    index: 3,
    enabled: true,
    props: { 
      varCount: 2,
      position: 3
    },
    expected: [true, true]
  }
]