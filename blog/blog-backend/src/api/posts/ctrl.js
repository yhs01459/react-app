//id의 초깃값
let postId = 1;

//posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용",
  },
];

/*포스트 작성*/
exports.write = (ctx) => {
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/*포스트 목록 조회*/
exports.list = (ctx) => {
  ctx.body = posts;
};
