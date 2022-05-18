import { PrismaClient } from "@prisma/client";

import { NextApiRequest, NextApiResponse } from "next";
import { getUsers } from "../../../lib/users";
//Criei uma rota users dentro da API. Tudo aqui é feito pelo node
//Cada rota é um arquivo. Aqui listamos todos os users pra quem acessar
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  //As rotas funcionam tanto para GET quanto POST
  if (method === "GET") {
    //é necessario verificar o metodo da requisição para fazer a ação necessária
    //Nesse caso um GET na rota vai retornar um json com todos os users
    const users = await getUsers()
    return res.status(200).json({
      data: users,
    });
  } else if (method === "POST") {
    //Vericia se o metodo é POST, e cria um novo usuário no banco de dados
    const {name} = req.body

    const user = await prisma.user.create({
      data:{
        name
      }
    })
    return res.status(201).json({
      data: user,
    });
  }
  return res.status(404).json({message: 'Route not found'})
}

// { id: 1, nome: "Victor Hugo" },
// { id: 2, nome: "Maria Leticia" },
// { id: 3, nome: "Tião da Zoom" },
// { id: 4, nome: "Miguel Fala mal" },
