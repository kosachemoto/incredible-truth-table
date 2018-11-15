export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      variables: ["a", "b", "c"],
      values: "101",
      expression: "a && b || c",
    },
    expected: "1 && 0 || 1"
  },
  {
    index: 1,
    enabled: true,
    props: {
      variables: ["aaa", "a", "aa"],
      values: "101",
      expression: "aaa && a || aa",
    },
    expected: "1 && 0 || 1"
  }
]