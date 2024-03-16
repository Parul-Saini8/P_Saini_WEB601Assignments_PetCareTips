// helper-files/content-interface.ts

interface Content {
    id: number;
    title: string;
    description: string;
    creator: string;
    imgURL?: string;
    type?: string;
    tags?: string[];
  }
  
  export default Content;
  