import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  //* pegar cookie de autenticacao*
  //* chamar alguma API*
  //* fzr uma logica e redirecionar o usuario*
  //NextResponse.next() nao intercepta, deixa seguir
  //NextResponse.rewrite('/blog/asa') direciona pra outra rota
  //e  redirect??
  //return new Response("Hello, world!");

  return NextResponse.next()
}
