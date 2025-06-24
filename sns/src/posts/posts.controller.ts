import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

/**
 * author: string;
 * title: string;
 * content: string;
 * likeCount: number;
 * commentCount: number;
 */

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans_official',
    title: '뉴진스 민지',
    content: '메이크업 고치고 있는 민지',
    likeCount: 100,
    commentCount: 99999,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스 해인',
    content: '노래연습하고 있는 해인',
    likeCount: 100000,
    commentCount: 99999,
  },
  {
    id: 3,
    author: 'blackpink_official',
    title: '블랙핑크 로제',
    content: '춤추는 로제',
    likeCount: 1000000,
    commentCount: 990999,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 1) GET /posts
  // 모든 post를 다 가져온다.
  @Get()
  getPosts(){
    return posts;
  }
  // 2) GET /posts/:id/:name/
  // 특정 post를 가져온다.
  @Get(':id')
  getPost(@Param('id') id: string){
    const post = posts.find((post) => post.id === +id);

    if (!post) {
      throw new NotFoundException();
    }
  }

  // 3) POST /posts
  // 새로운 post를 생성한다.

  // 4) PUT /posts/:id
  // 특정 post를 수정한다.

  // 5) DELETE /posts/:id
  // 특정 post를 삭제한다.

  /**
   * @description Get a post
   * @returns {Post} Post object
   */
  // @Get()
  // getPost(): PostModel {
  //   return {
  //     author: 'John Doe',
  //     title: 'Hello World',
  //     content: 'This is a sample post content.',
  //     likeCount: 10,
  //     commentCount: 5,
  //   };
  // }
}
