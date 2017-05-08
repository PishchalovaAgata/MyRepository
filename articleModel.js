const mongoose = require('./connect');

const Schema = mongoose.Schema;
const articleSchema = new Schema({
  title: String,
  author: String,
  summary: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  url: String,
});
articleSchema.statics.findById = function (id) {
  return this.findOne({ _id: id });
};
articleSchema.statics.deleteById = function (id) {
  return this.remove({ _id: id });
};
articleSchema.statics.findArticles = function (params) {
  return this
        .find(params.config)
        .sort({ createdAt: -1 })
        .skip(params.skip)
        .limit(params.top);
};
articleSchema.statics.countArticles = function (params) {
  return this
        .find(params.config)
        .count();
};
articleSchema.statics.updateById = function (params) {
  return this.update({ _id: params._id }, params);
};
exports.Article = mongoose.model('Article', articleSchema);
