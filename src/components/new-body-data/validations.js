export default function({ weight, bodyfat, image}) {
  const errors = {};

  if (!weight) errors.weight= 'We need your current weight';

  if (!bodyfat) errors.bodyfat = 'We need your current body fat';

  return errors;
}
