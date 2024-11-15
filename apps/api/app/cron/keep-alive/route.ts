import { database } from "@repo/database";

export const POST = async () => {
  const newUser = await database.user.create({
    data: {
      name: "cron-temp",
      email: "test@test.com",
      id: "cron-temp",
    },
  });

  await database.user.delete({
    where: {
      id: newUser.id,
    },
  });

  return new Response("OK", { status: 200 });
};
