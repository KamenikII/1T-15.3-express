const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

const { Post } = require('./models/Post.js')

// CREATE
app.post('/posts', async (req, res) => {
    try {
        const post = await Post.create(req.body)
        await post.reload()
        return res.status(201).json(post)
    } catch (error) {
        return res.status(400)
    }
})

// READ
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.findAll({})
        return res.status(200).json({
            data: posts
        })
    } catch (error) {
        return res.status(400)
    }
})
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(400)
    }
})

// UPDATE
app.patch('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        if (post) {
            post.content = req.body.content
        }
        await post.save()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(400)
    }
})

// DELETE
app.delete('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id)
        await post.destroy
        return res.status(204).json({
            message: 'Post deleted successfully'
        })
    } catch (error) {
        return res.status(400)
    }
})



app.listen(port, async () => {
    try {
        await Post.sync({
            alter: true,
            force: false
        })
    } catch (error) {
        console.log(error)
    }
})