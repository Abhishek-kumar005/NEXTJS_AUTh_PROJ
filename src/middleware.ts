import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const ispublicPath =path==="/"||path==="/login" || path==="/signup"||path==="/verifyemail"||path==="/sendemailforgotpassword"
     
  const token =  request.cookies.get("token")?.value ||""

  if(ispublicPath && token){
    return NextResponse.redirect(new URL("/profile",request.nextUrl))

}
if(!ispublicPath && !token){
    return NextResponse.redirect(new URL("/login",request.nextUrl))

}

return NextResponse.next();


}




//matcher
export const config = {

    matcher: ["/profile/:path*", "/", "/login", "/signup","/verifyemail","/sendemailforgotpassword"]
}