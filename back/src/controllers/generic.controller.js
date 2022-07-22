const boom = require('boom')
const genericCrud = (model) => ({

    async get({ params: { id } }, res) {
        try {
            return res.status(200).send(await model.findById(id))
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async getAll(req, res) {
        try {
            console.log('here')
            const items = await model.find()
            return res.status(200).send(items)
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async create({ body }, res) {
        try {
            const item = new model(body)
            return res.status(200).send(await item.save())
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async update({ params: { id }, body }, res) {
        try {
            return res.status(200).send(await model.findByIdAndUpdate(id, body, {new: true}))
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
    async delete({ params: { id } }, res) {
        try {
            await model.findByIdAndDelete(id)
            return res.status(200).send({ status: 'OK', message: 'продукт удален'})
        } catch (err) {
            return res.status(400).send(boom.boomify(err))
        }
    },
})
module.exports = genericCrud
