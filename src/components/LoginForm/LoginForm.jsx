export const LoginForm = ({ submit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const { login, password } = form.elements;
    submit({ login: login.value, password: password.value });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
