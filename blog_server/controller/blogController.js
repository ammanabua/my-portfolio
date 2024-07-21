const Blog = require('../models/blog');

let blogController = {
    getBlogs: function (req, res) {
        //For query part
        // if(Object.keys(req.query).length != 0){
        //     let filteredBlogs = [...Blog.getBlogs()];

        //     if(req.query.filter){
        //         filteredBlogs = filteredBlogs.filter(blog => blog.title)
        //     }
        // }

        res.status(200).json(Blog.getBlogs());
    },

    getBlogById: function (req, res){
        let blogId = req.params.id;

        if(blogId){
            let blog = Blog.getBlogById(blogId);

            if(blog){
                res.status(200).json(blog);
            }
            else{
                res.status(404).json({ message : "Blog not found!"});
            }
        }
        else {
            res.json({ message: "Provide Blog ID"});
        }
    },

    createBlog: (req, res) => {

        let { id, title, image, body } = req.body;

        if(id && title && image && body){
            let blog = new Blog(id, title, image, body);
            let newBlog = blog.createBlog();

            if(newBlog){
                res.json({ message: "Blog already exits"})
            }
            else{
                res.json({ message: "New blog created"});
            }
        }
    }
}


module.exports = blogController;