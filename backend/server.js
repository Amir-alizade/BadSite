const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://mongo:27017/greensmart', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  inviteCode: String
}));

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
  const { username, password, phone, inviteCode } = req.body;
  const existing = await User.findOne({ username });
  if (existing) return res.json({ success: false, message: 'اکانت موجوده، وارد شو!' });
  await User.create({ username, password, phone, inviteCode });
  res.json({ success: true, message: 'ثبت‌نام موفق!' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) return res.json({ success: true, message: 'ورود موفق!' });
  res.json({ success: false, message: 'نام کاربری یا رمز اشتباهه.' });
});

app.listen(3000, () => console.log('Backend running on port 3000'));