const identifyChar = (string) => {
  switch (string) {
    case 'Size':
      return ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'];
    case 'Width':
      return ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
    case 'Comfort':
      return ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
    case 'Quality':
      return ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
    case 'Length':
      return ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
    case 'Fit':
      return ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];
    default:
      return null;
  }
};

export default identifyChar;
