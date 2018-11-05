const cutText = str => {
  return str.length > 50 ? str.substring(0, 50) + "..." : str;
};

export default {
  cutText
};
