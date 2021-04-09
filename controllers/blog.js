require('../models/relations');
const Blog = require('../models/blog');
const { blog_schema } = require('../utility/validation');
const { getting_date } = require('../utility/date');

module.exports = {
    home: async (req, res, next) => {
        try {
            const blogs = await Blog.findAll({ include: 'user' })
            if (!blogs.length) {
                res.status(200);
                res.send([]);
            } else {
                const view = await home_view(blogs);
                res.status(200);
                res.send(view);
            }
        } catch (err) {
            next(err);
        }
    },

    My_articles: async (req, res, next) => {
        try {
            const blogs = await Blog.findAll({
                where: { author: req.user },
                include: 'user'
            })
            if (!blogs.length) {
                res.status(200);
                res.send([]);
            } else {
                const view = await home_view(blogs);
                res.status(200);
                res.send(view);
            }
        } catch (err) {
            next(err);
        }
    },

    single_article: async (req, res, next) => {
        try {
            const id = req.params.id;
            const blog = await Blog.findOne({
                where: { id },
                include: 'user'
            })
            if (blog == null) {
                throw new Error('This article not found');
            } else {
                const full_name = `${blog.user.first_name} ${blog.user.last_name}`;
                res.status(200);
                res.send({
                    id: blog.id,
                    title: blog.title,
                    author: full_name,
                    date: getting_date(blog.createdAt),
                    aricle: blog.article
                });
            }
        } catch (err) {
            next(err);
        }
    },

    new_article: async (req, res, next) => {
        try {
            await blog_schema.validateAsync(req.body);
            await Blog.create({
                author: req.user,
                title: req.body.title,
                article: req.body.article
            })
            res.status(201);
            res.send({ message: 'Article Created' });
        } catch (err) {
            next(err);
        }
    },

    update_article: async (req, res, next) => {
        try {
            const id = req.params.id;
            const blog = await Blog.findOne({ where: { id } })
            if (blog == null) { throw new Error('This article not found') };
            if (blog.author == req.user) {
                await blog_schema.validateAsync(req.body);
                blog.update({
                    title: req.body.title,
                    article: req.body.article
                })
                res.status(202);
                res.send({ message: "Article Updated" });
            } else {
                throw new Error(`You can't update this article.`)
            }
        } catch (err) {
            next(err);
        }
    },

    delete_article: async (req, res, next) => {
        try {
            const id = req.params.id;
            const blog = await Blog.findOne({ where: { id } })
            if (blog == null) {
                throw new Error('This article not found')
            } else {
                if (blog.author == req.user) {
                    blog.destroy();
                    res.status(202)
                    res.send({ message: "Article deleted" });
                } else {
                    throw new Error(`You can't delete this article.`)
                }
            }
        } catch (err) {
            next(err);
        }
    },
};

const home_view = (blogs) => {
    let list = [];
    blogs.forEach(element => {
        const single_article = {
            id: element.id,
            title: element.title,
            author: `${element.user.first_name} ${element.user.last_name}`,
            date: getting_date(element.createdAt)
        }
        list.push(single_article);
    })
    return list;
}
