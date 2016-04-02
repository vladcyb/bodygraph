export default (values) => {
  const errors = {}
  const { weight, bodyfat, image} = values;

  if (!weight) errors.weight= 'We need your current weight';

  if (!bodyfat) errors.bodyfat = 'We need your current body fat';

  return errors;
}
