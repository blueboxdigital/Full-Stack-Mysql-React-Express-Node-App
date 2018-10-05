const Sequelize = require("sequelize");
const pages = require("../models").pages;
module.exports = {
  get(req, res) {
    return pages
      .findAll({
        attributes: ["title", "pageId", "content", "status", "parent"]
      })
      .then(page => res.status(200).send(page))
      .catch(error => {
        res.status(400).send(error);
      });
  },

  async create(req, res) {
    try {
      await pages
        .create({
          title: req.body.title,
          content: req.body.content,
          status: req.body.status,
          parentPage: req.body.parentPage,
          createdBy: req.body.createdBy
        })
        .then(data => res.status(200).send(data));
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async update(req, res) {
    try {
      await pages
        .update(
          {
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
            parentPage: req.body.parentPage,
            createdBy: req.body.createdBy
          },
          { returning: true, where: { pageId: req.params.id } }
        )
        .then(data => res.status(200).send(data));
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async delete(req, res) {
    try {
      await pages.destroy({ where: { pageId: req.params.id } }).then(data => res.status(200));
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  currentPage(req, res) {
    return pages
      .findById(req.params.id, {
        attributes: ["title", "pageId", "content", "status", "parent"]
      })
      .then(page => res.status(200).send(page))
      .catch(error => {
        res.status(400).send(error);
      });
  }
};
