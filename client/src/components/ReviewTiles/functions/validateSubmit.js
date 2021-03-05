const validateEmail = (email) => {
  if (!email) {
    return false;
  }
  if (!email.includes('.com') && !email.includes('.net')) {
    return false;
  }
  const emailArr = email.split('@');
  const username = emailArr[0];
  const domainAndDot = emailArr[1].split('.');
  if (username.length < 1 || domainAndDot.length < 2 || domainAndDot[0].length < 1) {
    return false;
  }
  return true;
};

const validateSubmit = (state, meta) => {
  const formReqs = ['recommendation', 'username', 'email', 'rating'];
  const { characteristics } = meta;
  const keys = Object.keys(characteristics);
  let validation;
  if (state && meta) {
    keys.map((key) => {
      if (!state[key] || state[key].length === 0) {
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
    if (!validateEmail(state.email) && !validation) {
      validation = 'email address not valid';
    }
  }
  if (!validation) {
    validation = true;
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
