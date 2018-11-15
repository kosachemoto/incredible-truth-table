export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "101"
    },
    expected: {"a": "1", "b": "0", "c": "1"}
  },
  {
    index: 1,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "1"
    },
    expected: {"a": "0", "b": "0", "c": "1"}
  },
  {
    index: 2,
    enabled: true,
    props: {
      variables: ["a", "b", "c"],
      values: "0"
    },
    expected: {"a": "0", "b": "0", "c": "0"}
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
    expected: {"a": "0", "aa": "1", "aaa": "1"}
  }
];