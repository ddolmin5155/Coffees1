const mongoose = require('mongoose');

var Coffee1Schema = mongoose.Schema({   //스키마(Schema) 설정
  coffeeId: {type: Number, require:true},
  name: {type: String, require: true},
  price: { type: String, require: true},
  feature: { type: String, require: true},
  period: {type: String, require: true},
  register_date: { type: Date, default:Date.now}
});

module.exports = mongoose.model('Coffee1', Coffee1Schema); //소문자화 후 복수형으로 바꾸어 devices 컬렉션이 됨