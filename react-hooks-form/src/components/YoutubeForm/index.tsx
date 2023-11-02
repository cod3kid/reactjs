import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormData = {
  username: string;
  email: string;
  channel: string;
};
function YoutubeForm() {
  const form = useForm<FormData>();
  const { register, control, handleSubmit } = form;

  const onSubmitForm = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Hello world",
            },
          })}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email",
            },
          })}
        />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
