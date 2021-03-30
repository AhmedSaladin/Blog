const Liked_Articles = require('../models/likedBlog');
const { getting_date } = require('../utility/date');

module.exports = {
    saved_article_list: async (req, res, next) => {
        try {
            const user_id = req.user;
            const list = await Liked_Articles.findAll({
                where: { userId: user_id }, include: {
                    all: true,
                    nested: true
                }
            });
            if (!list.length) {
                res.status(200);
                res.send([]);
            } else {
                const view = await list_view(list);
                res.status(200);
                res.send(view);
            }
        } catch (err) {
            next(err);
        }
    },

    save_article_to_list: async (req, res, next) => {
        try {
            const user_id = req.user;
            const article_id = req.params.id;
            const article = await Liked_Articles.findOne({
                where: {
                    userId: user_id,
                    blogId: article_id
                }
            })
            if (article) {
                res.status(406)
                res.send("Article already added")
            } else {
                await Liked_Articles.create({
                    userId: user_id,
                    blogId: article_id
                });
                res.status(200);
                res.send("Article added to list")
            }
        } catch (err) {
            next(err);
        }
    },
    delete_saved_article: async (req, res, next) => {
        try {
            const blog_id = req.params.id;
            const user_id = req.user;
            const blog = await Liked_Articles.findOne({
                where: {
                    blogId: blog_id,
                    userId: user_id
                }
            })
            if (!blog) {
                res.status(400);
                res.send('Please, save the article first.');
            } else {
                blog.destroy();
                res.status(202)
                res.send("Article deleted.");
            }
        } catch (err) {
            next(err);
        }
    },
};

const list_view = (blogs) => {
    let list = [];
    blogs.forEach(element => {
        const path = element.blog
        const single_blog = {
            article_id: path.id,
            title: path.title,
            author: `${path.user.first_name} ${path.user.last_name}`,
            date: getting_date(element.createdAt)
        }
        list.push(single_blog);
    })
    return list;
};