export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "101"
    },
    expected: {"a": "true", "b": "false", "c": "true"}
  },
  {
    index: 1,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "1"
    },
    expected: {"a": "false", "b": "false", "c": "true"}
  },
  {
    index: 2,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "0"
    },
    expected: {"a": "false", "b": "false", "c": "false"}
  },
  {
    index: 3,
    enabled: true,
    props: {
      variables: [],
      values: ""
    },
    expected: {}
  },
  {
    index: 4,
    enabled: true,
    props: {
      variables: ["aaa", "a", "aa"],
      values: "101",
      expression: "aaa && a || aa",
    },
    expected: {"a": "false", "aa": "true", "aaa": "true"}
  }
];