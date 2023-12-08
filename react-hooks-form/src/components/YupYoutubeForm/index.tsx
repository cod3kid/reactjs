import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  username: string;
  email: string;
  channel: string;
};

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Email format is invalid")
    .required("Email is required"),
  channel: yup.string().required("Channel is required"),
});
function YupYoutubeForm() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmitForm = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        {errors?.username && <span>{errors?.username?.message}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />
        {errors?.email && <span>{errors?.email?.message}</span>}

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        {errors?.channel && <span>{errors?.channel?.message}</span>}

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YupYoutubeForm;
