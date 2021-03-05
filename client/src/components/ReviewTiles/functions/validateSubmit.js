const validateSubmit = (state, meta) => {
  console.log(state);
  console.log(meta);
  const formReqs = ['recommended', 'username', 'email'];
  const { characteristics } = meta;
  const keys = Object.keys(characteristics);
  let validation = true;
  if (state && meta) {
    keys.map((key) => {
      if (!state[key]) {
        validation = `a selection for ${key} is required`;
        return null;
      }
      return null;
    });
    formReqs.map((param) => {
      if (!state[param] && !validation) {
        validation = `value for ${param} is required`;
        return null;
      }
      return null;
    });
    if (state.charsLeft > 0 && !validation) {
      validation = 'review must be at least 50 characters long';
    }
  }
  return validation;
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
