let db = [
    {
        id: 123456,
        title: "Coming to America",
        image: "https://unsplash.com/photos/silver-macbook-beside-space-gray-iphone-6-and-clear-drinking-glass-on-brown-wooden-top-n8Qb1ZAkK88",
        body: "This is my first blog"
    },
    {
        id: 572634,
        title: "Barbershop Chronicles",
        image: "https://unsplash.com/photos/silver-macbook-beside-space-gray-iphone-6-and-clear-drinking-glass-on-brown-wooden-top-n8Qb1ZAkK88",
        body: "This is my second blog"
    },
    {
        id: 562342,
        title: "Adjusting to food",
        image: "https://unsplash.com/photos/silver-macbook-beside-space-gray-iphone-6-and-clear-drinking-glass-on-brown-wooden-top-n8Qb1ZAkK88",
        body: "This is my second blog"
    },
    

]


class Blog{

    constructor(id, title, image, body){
        this.id = id;
        this.title = title;
        this.image = image;
        this.body = body;
    };

    createBlog(){
        let blog = db.find(b => b.id === this.id);
        if (!blog){
            db.push(this);
        }

        return blog;
    }

    static getBlogById(id){
        return db.find(blog => blog.id == id);
    }

    static getBlogs(){
        return db.map(blog => blog);
    }

    static deleteById(id){
        const index = db.findIndex(blog => blog.id == id);

        if(index > -1) {
            const deletedBlog = db[index];
            db.splice(index, 1);
            return deletedBlog;
        }
    }
}

module.exports = Blog;