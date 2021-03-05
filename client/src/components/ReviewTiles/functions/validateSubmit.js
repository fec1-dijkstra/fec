const validateSubmit = (state, meta) => {
  console.log(state);
  console.log(meta);
  const { characteristics } = meta;
  const keys = Object.keys(characteristics);
  keys.map((key) => {
    if (!state[key]) {
      console.log(`error: value for ${key} not found`);
      return null;
    }
    return null;
  });
};

module.exports = {
  validateSubmit,
};
/*
{
  characteristics: {Size: {…}, Width: {…}, Comfort: {…}, Quality: {…}}
  product_id: "17762"
  ratings: {1: "14", 2: "11", 3: "7", 4: "11", 5: "4"}
  recommended: {false: "17", true: "30"}
}
{
  Comfort: "3"
  Quality: "5"
  Size: "1"
  Width: "2"
  charsLeft: -7
  email: "example.email.com"
  photos: []
  rating: 0
  rec: null
  reviewBody: "Review body text with a length exceeding fifty characters"
  show: true
  summary: "Example Summary"
  username: "username"
} */
