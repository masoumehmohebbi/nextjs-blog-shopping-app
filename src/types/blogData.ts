export interface Blog {
  _id: string;
  hashId: string;
  slug: string;
  coverImage: string;
  title: string;
  author: {
    name: string;
  };
  category: {
    englishTitle: string;
  };
  readingTime?: number;
}

export interface PostDetailsProps {
  post: {
    author: {
      name: string;
      biography: string;
    };
    category: {
      englishTitle: string;
    };
    createdAt: Date | string;
    readingTime: number;
    title: string;
    coverImage: string;
    isBookmarked: boolean;
    hashId: string;
    slug: string;
    related: {
      _id: string;
      hashId: string;
      slug: string;
      title: string;
      coverImage: string;
      author: {
        name: string;
      };
      category: {
        englishTitle: string;
      };
    }[];
  };
}
