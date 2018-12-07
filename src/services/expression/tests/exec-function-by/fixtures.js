export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      expression: "a && b || c"
    },
    expected: new Function("a", "b", "c", "return a && b || c").toString()
  }
]