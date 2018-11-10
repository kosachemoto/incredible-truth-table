export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "101",
      expression: "a && b || c",
    },
    expected: ["true", "false", "true", "true"]
  },
  {
    index: 1,
    enabled: true,
    props: {
      variables: ["aaa", "a", "aa"],
      values: "101",
      expression: "aaa && a || aa",
    },
    expected: ["true", "false", "true", "true"]
  }
]