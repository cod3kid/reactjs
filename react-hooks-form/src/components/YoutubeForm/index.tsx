import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormData = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
};
function YoutubeForm() {
  const form = useForm<FormData>({
    defaultValues: {
      username: "Batman",
      email: "batman@gmail.com",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
    },

    // defaultValues: async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/users/1"
    //   );
    //   const data = await response.json();

    //   return {
    //     username: "Superman",
    //     email: data.email,
    //     channel: "",
    //   };
    // },
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
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        {errors?.username && <span>{errors?.username?.message}</span>}

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
            required: {
              value: true,
              message: "Email is required",
            },
            // validate: (fieldValue) => {
            //   if (fieldValue === "admin@mail.com") {
            //     return "Enter a different email address";
            //   }
            // },
            validate: {
              isNotAdmin: (fieldValue) => {
                if (fieldValue === "admin@mail.com") {
                  return "Enter a different email address";
                }
              },
              isNotBlacklisted: (fieldValue) => {
                if (fieldValue.endsWith("blocked.com")) {
                  return "Enter an allowed domain name";
                }
              },
            },
          })}
        />
        {errors?.email && <span>{errors?.email?.message}</span>}

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        {errors?.channel && <span>{errors?.channel?.message}</span>}

        <label htmlFor="twitter">Twitter</label>
        <input type="text" id="twitter" {...register("social.twitter")} />

        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook")} />
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
