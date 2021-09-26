import React from "react";
import { Typography, FormControl, InputLabel, Input, FormHelperText, Button } from "@material-ui/core";

export const Login = () => {
  const [form, setForm] = React.useState({ email: "", password: "" });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setForm((currentState) => ({ ...currentState, [e.target.name]: e.target.value }));
  return (
    <div>
      <Typography>Login page</Typography>

      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={form.email} name="email" onChange={onChangeHandler} />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
      <br />

      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" value={form.password} name="password" onChange={onChangeHandler} />
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </FormControl>

      <br />
      <Button onClick={(e) => console.log(form)}>Login</Button>

      <br />

      <Button>Login with Google</Button>
    </div>
  );
};
