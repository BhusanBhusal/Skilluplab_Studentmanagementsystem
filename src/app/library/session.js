'use server'
import {SignJWT,jwtVerify} from 'jose';
import { cookies } from 'next/headers';

const secretKey=process.env.secretKey;
const encodedKey= new TextEncoder().encode(secretKey);

export async function encrypt(userData){
    return new SignJWT(userData).setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime('1d')
    .sign(encodedKey)
}

export async function decrypt(session){
    try{
        const {userData}= await jwtVerify(session,encodedKey ,{
            algorithms:['HS256'],
        })
        return userData;
    }catch(error){
        console.log('Failed to verify session')
    }
}

export async function createSession(userId){
    const expireAt = new Date(Date.now()+ 1*24*60*60*1000)
    const session = await encrypt({userId, expireAt})
    cookies().set('session',session,{
        httpOnly:true,
        secure:true,
        expires:expireAt,
        sameSite:'lax',
        path:'/'
    })
}

export async function updateSession(){
    const session = cookies().get('session').value;
    const userData= await decrypt(session);
    if (!session || !payload) {
        return null
      }
      const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    console.log("i am here");
    cookies().delete('session')
  }