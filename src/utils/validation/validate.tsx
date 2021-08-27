export const validateInput = (value: string) =>
  value ? undefined : 'Required';
const emailRegex = /\S+@\S+\.\S+/;
export const validateEmail = (value: string) => {
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email!';
  }
};
