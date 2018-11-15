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
  },
  {
    index: 2,
    enabled: true,
    props: {
      variables: ["a", "b"],
      values: "0",
      expression: "a && b",
    },
    expected: ["false", "false", "false"]
  },
  {
    index: 3,
    enabled: true,
    props: {
      variables: ["a", "b"],
      values: "1",
      expression: "a && b",
    },
    expected: ["false", "true", "false"]
  },
  {
    index: 4,
    enabled: true,
    props: {
      variables: ["a", "b"],
      values: "10",
      expression: "a && b",
    },
    expected: ["true", "false", "false"]
  },
  {
    index: 5,
    enabled: true,
    props: {
      variables: ["a", "aa"],
      values: "11",
      expression: "aa && a",
    },
    expected: ["true", "true", "true"]
  }
]