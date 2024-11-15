export const json = {
  title: "Personal Details",
  pages: [
    {
      name: "PersonalDetails",
      elements: [
        {
          type: "text",
          name: "FirstName",
          title: "Enter your first name:",
        },
        {
          type: "text",
          name: "LastName",
          title: "Enter your last name:",
        },
        {
          type: "panel",
          name: "Contacts",
          state: "collapsed",
          title: "Contacts (optional)",
          elements: [
            {
              type: "text",
              name: "LinkedIn",
              title: "LinkedIn:",
            },
            {
              type: "text",
              name: "GitHub",
              title: "GitHub Username:",
            },
          ],
        },
      ],
    },
  ],
};
