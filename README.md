Allows you to get, add, edit, and delete users posts and comments.

USER ROUTES:
http://localhost:3000/users will get and display all current users in the DB.
http://localhost:3000/users/newUser will take in a body of the user's name and handle(screen name) and will add it to the user DB.
http://localhost:3000/users/editUser/:id will edit a user's (the :id) info based on the body passed.
http://localhost:3000/users/deleteUser/:id will delete a user based on their :id.

POST ROUTES:
http://localhost:3000/posts will get and display all current posts in the DB.
http://localhost:3000/posts/newPost will take in a body of the post's image and text content and will add it to the post DB.
http://localhost:3000/posts/editPost/:id will edit a post's (the :id) info based on the body passed.
http://localhost:3000/posts/deleteUser/:id will "delete" a post based on its :id. (It will just blank it out to keep the thread alive.)

USER ROUTES:
http://localhost:3000/comments will get and display all current comments in the DB.
http://localhost:3000/comments/newComment will take in a body of the comment's parent post and text content and will add it to the comment DB.
http://localhost:3000/comments/editComment/:id will edit a comment's(the :id) info based on the body passed. (cannot edit the post the comment is applied to.)
http://localhost:3000/comments/deleteComment/:id will "delete" a comment based on its :id. (It will just blank it out to keep replies active.)