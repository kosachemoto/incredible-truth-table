export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      variables: ["aa", "a", "aaa"],
      expression: "a && aa || aaa"
    },
    expected: ["aa", "a", "aaa", "a && aa || aaa"]
  }
]