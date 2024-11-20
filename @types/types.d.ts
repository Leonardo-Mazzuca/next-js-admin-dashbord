
declare global {
    type AnalyticsItem = {
        name: string;
        uv: number;
        pv: number;
        amt: number;
      }

      type Post = {
        id: string;
        title: string;
        body: string;
        author: string;
        date: string;
        comments: PostComment[];
      }
      
      type PostComment = {
        id: string;
        text: string;
        username: string;
      }
}

export {}