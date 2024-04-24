import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { useRouter } from "next/navigation";

export default withAuth (
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

    if (req.nextUrl.pathname.startsWith('/main') && req.nextauth.token.role != 'admin') {
      return NextResponse.redirect(new URL(`/getId/${req.nextauth.token._id}`, req.url));
      // return NextResponse.rewrite(new URL(`/Investment/${req.nextauth.token._id}`, req.url));
    }
  },
{  callbacks: {
    authorized: ({token}) => !!token,
  }}
)
export const config = {matcher: ['/main']}
