import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { createId } from "@paralleldrive/cuid2";
import bcrypt from "bcryptjs";
import cors from "@fastify/cors";
import { z } from "zod";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
    credentials: true,
});

  fastify.post("/signup", async(request: FastifyRequest, reply: FastifyReply) => {
    const createUserBody = z.object({
      name: z.string(),
      email: z.string(),
      password: z.string(),
    })

    try {
      const { name, email, password } = createUserBody.parse(request.body);
      const id = createId();
      const saltRounds = 10;
      const hashedPassword ="(" + password + ")" + await bcrypt.hash(password, saltRounds);

      reply.send({
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
      });
      reply.status(201);
    } catch (error) {
      reply.send(error);
      reply.status(400);
    }
  })

  fastify.listen({ port: 7777, host: '192.168.15.5' /*host: "0.0.0.0"*/});
  console.log("Server running on port 7777, JAEEEE!!!");

}

bootstrap();