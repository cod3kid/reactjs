import { Stack, TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function MuiYoutubeForm() {
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

  const handleOnSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleOnSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            label="Email"
            type="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", {
              required: "Email is required",
            })}
          />
          <TextField
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default MuiYoutubeForm;
