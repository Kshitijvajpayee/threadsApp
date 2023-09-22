import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z
    .string()
    .min(3, { message: "Name should be minimum 3 characters." })
    .max(30, { message: "Name should be maximum 30 caracters." }),
  username: z
    .string()
    .min(3, { message: "UserName should be minimum 3 characters." })
    .max(30, { message: "UserName should be maximum 30 caracters." }),
  bio: z
    .string()
    .min(3, { message: "Bio should be minimum 3 characters." })
    .max(1000, { message: "Bio should be maximum 1000 caracters." }),
});
