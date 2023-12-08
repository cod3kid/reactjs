import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  username: string;
  email: string;
  channel: string;
};

const schema = z.object({
  //nonempty() is deprecated
  username: z.string().min(1, "Username is required"),
  email: z
    .string()
    .email("Email format is invalid")
    .min(1, "Email is required"),
  channel: z.string().min(1, "Channel is required"),
});
function ZodYoutubeForm() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
    resolver: zodResolver(schema),
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

export default ZodYoutubeForm;
