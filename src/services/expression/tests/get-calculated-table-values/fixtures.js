export const fixtures = [
  {
    index: 0,
    enabled: true,
    props: { 
      variables: [
        "a", 
        "b"
      ],
      expression: "a && b"
    },
    expected: [
      ["false", "false", "false"],
      ["false", "true",  "false"],
      ["true",  "false", "false"],
      ["true",  "true",  "true" ]
    ]
  }
]