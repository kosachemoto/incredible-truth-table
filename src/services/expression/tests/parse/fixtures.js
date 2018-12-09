export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      expression: "a && b || c"
    },
    expected: ["a", "b", "c"]
  },
  {
    index: 1,
    enabled: true,
    props: { 
      expression: "a && a || c"
    },
    expected: ["a", "c"]
  },
  {
    index: 2,
    enabled: true,
    props: { 
      expression: "a && aaa || aa"
    },
    expected: ["a", "aaa", "aa"]
  },
  {
    index: 3,
    enabled: true,
    props: { 
      expression: "a && true || aa"
    },
    expected: ["a", "aa"]
  },
  {
    index: 4,
    enabled: true,
    props: { 
      expression: "a"
    },
    expected: ["a"]
  },
  {
    index: 5,
    enabled: true,
    props: { 
      expression: ""
    },
    expected: []
  }
]