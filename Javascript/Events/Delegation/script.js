const commentForm = document.querySelector("#commentForm");
const commentContainer = document.querySelector("#comments");



commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = commentForm.elements.username;
  const comment = commentForm.elements.comment;

  addComment(username.value, comment.value);
  username.value = "";
  comment.value = "";
});

const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bolding = document.createElement("b");
  bolding.append(username);
  newComment.append(bolding);
  newComment.append(` - ${comment}`);
  commentContainer.append(newComment);
};

commentContainer.addEventListener('click', function(e){
    e.target.nodeName === e.target.remove();
})