export const navData: InavObj[] = [
  {
    id: "author",
    displayName: "Author",
    path: "/author/about",
    basePath: "/author",
    subTab: [
      {
        id: "about",
        displayName: "About",
        path: "/author/about",
        basePath: "/author/about"
      }
    ]
  },
  {
    id: "subject",
    displayName: "Subject",
    path: "/Subject/English",
    basePath: "/Subject",
    subTab: [
      {
        id: "english",
        displayName: "English",
        path: "/Subject/English",
        basePath: "/Subject/English"
      },
      {
        id: "math",
        displayName: "Math",
        path: "/Subject/Maths",
        basePath: "/Subject/Maths"
      }
    ]
  }
];
export interface InavObj {
  id: string;
  displayName: string;
  path: string;
  basePath: string;
  subTab?: InavObj[];
}
