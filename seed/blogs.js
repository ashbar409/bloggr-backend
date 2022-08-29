const db = require('../db')
const Blog = require('../models/blog')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const blogPosts = [
      {
          title: "etiam sit amet nisl purus",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis auctor elit sed vulputate mi sit amet mauris. At volutpat diam ut venenatis tellus in. Consequat mauris nunc congue nisi vitae suscipit. Risus nullam eget felis eget nunc. Diam maecenas sed enim ut sem viverra aliquet eget sit. Amet mattis vulputate enim nulla aliquet porttitor. Cras sed felis eget velit aliquet. Duis convallis convallis tellus id interdum velit laoreet id donec. Commodo elit at imperdiet dui. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Pharetra sit amet aliquam id diam maecenas ultricies mi. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Odio morbi quis commodo odio. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Volutpat lacus laoreet non curabitur gravida arcu ac."
      },
      {
        title: "fringilla ut morbi tincidunt augue",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu. Posuere lorem ipsum dolor sit amet consectetur. Senectus et netus et malesuada fames ac turpis egestas sed. Augue ut lectus arcu bibendum at varius vel pharetra vel. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Dapibus ultrices in iaculis nunc sed augue. Diam volutpat commodo sed egestas egestas. Ullamcorper sit amet risus nullam eget felis eget nunc. Justo nec ultrices dui sapien eget mi proin sed. Scelerisque felis imperdiet proin fermentum leo vel. Tristique et egestas quis ipsum suspendisse ultrices gravida. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Sed sed risus pretium quam vulputate dignissim. Eros donec ac odio tempor orci dapibus ultrices in. Venenatis tellus in metus vulputate eu scelerisque felis."
      }
    ]

  await Blog.insertMany(blogPosts)
  console.log("Created items!")
}
const run = async () => {
  await main()
  db.close()
}

run()