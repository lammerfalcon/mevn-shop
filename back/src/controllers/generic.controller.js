const boom = require('boom')
const genericCrud = (model) => ({

    async get({ params: { id }}) {
        try {
            return await model.findById(id)
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async getAll() {
        try {
            return await model.find()
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async create({ body }) {
        try {
            const item = new model(body)
            return await item.save()
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async update({ params: { id }, body }) {
        try {
            return await model.findByIdAndUpdate(id, body, {new: true})
        } catch (err) {
            throw boom.boomify(err)
        }
    },
    async delete({ params: { id }}) {
        try {
            await model.findByIdAndDelete(id)
            return { status: 'OK', message: 'продукт удален'}
        } catch (err) {
            throw boom.boomify(err)
        }
    },
})
module.exports = genericCrud
