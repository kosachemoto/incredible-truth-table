export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      variables: [
        "a", 
        "aa"
      ],
      expression: "a && aa"
    },
    expected: [
      ["false", "false", "false"],
      ["false", "true",  "false"],
      ["true",  "false", "false"],
      ["true",  "true",  "true" ]
    ]
  }
]