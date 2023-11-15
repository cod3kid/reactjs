import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

type FormData = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

let renderCount = 0;
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
      phoneNumbers: ["", ""],
      phNumbers: [
        {
          number: "",
        },
      ],
      dob: new Date(),
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
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    reset,
  } = form;
  const {
    errors,
    dirtyFields,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  // console.log({ dirtyFields, touchedFields, isDirty });
  const onSubmitForm = (data: FormData) => {
    console.log(data);
  };

  const onErrors = (errors: FieldErrors<FormData>) => {
    console.log(errors);
  };

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  // useEffect(() => {
  //   const watchObj = watch((values) => {
  //     console.log(values);
  //   });
  //   return () => watchObj.unsubscribe();
  // }, [watch]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleGetValues = () => {
    // console.log(getValues("username"));
    // console.log(getValues(["username", "email"]));

    console.log(getValues());
  };

  const handleSetValue = () => {
    // setValue("username", "");
    setValue("username", "", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  // const watchUsername = watch("username");
  // const watchUsernameAndEmail = watch(["username", "email"]);

  // Watches for changes of all fields
  // const watchedValues = watch();
  renderCount++;
  return (
    <div>
      <h2>Youtube Form ({renderCount / 2})</h2>
      <h4>Watch Username</h4>
      <form onSubmit={handleSubmit(onSubmitForm, onErrors)} noValidate>
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
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Channel is required",
            },
          })}
        />
        {errors?.channel && <span>{errors?.channel?.message}</span>}

        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            // disabled:true
          })}
          disabled={watch("channel") === ""}
        />
        {errors?.social?.twitter && (
          <span>{errors?.social?.twitter?.message}</span>
        )}

        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook")} />

        <label htmlFor="primary-phone">Primary Phone No.</label>
        <input type="text" id="primary-phone" {...register("phoneNumbers.0")} />

        <label htmlFor="secondary-phone">Secondary Phone No.</label>
        <input
          type="text"
          id="secondary-phone"
          {...register("phoneNumbers.1")}
        />

        <div>
          <label htmlFor="phone-list">List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => (
              <div key={field.id}>
                <input
                  type="text"
                  id="phone-list"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button onClick={() => remove(index)}>Remove</button>
                )}
              </div>
            ))}
            <button onClick={() => append({ number: "" })}>
              Add Phone Numbers
            </button>
          </div>
        </div>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "Age is required",
            },
          })}
        />
        {errors?.age && <span>{errors?.age?.message}</span>}

        <label htmlFor="dob">DoB</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
            required: {
              value: true,
              message: "Date of Birth is required",
            },
          })}
        />
        {errors?.dob && <span>{errors?.dob?.message}</span>}

        <button type="button" onClick={() => handleGetValues()}>
          Get Values
        </button>

        <button type="button" onClick={() => handleSetValue()}>
          Set Value
        </button>

        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
